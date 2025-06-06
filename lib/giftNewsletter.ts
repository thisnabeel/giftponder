// lib/giftNewsletter.ts
import { openai } from "./openai";
import prisma from "./prisma";
import { formatInTimeZone } from "date-fns-tz";
import {
  getDaysLeft,
  sanitizeDaysLabelIn,
} from "../components/UpcomingSpecialDaysInline";

async function getUpcomingSpecialDays(userId: string) {
  const now = new Date();
  const today = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );
  const future = new Date(today);
  future.setUTCDate(today.getUTCDate() + 60); // Next 2 months in UTC

  const days = await prisma.specialDay.findMany({
    where: {
      person: { userId },
      date: { gte: today, lte: future },
    },
    include: {
      person: {
        include: {
          traits: true,
          rejectedGiftIdeas: true,
        },
      },
    },
    orderBy: { date: "asc" },
  });

  return days;
}

function getEmoji(title: string) {
  const t = title.toLowerCase();
  if (t.includes("birthday")) return "🎂";
  if (t.includes("mother")) return "💐";
  if (t.includes("anniversary")) return "💍";
  if (t.includes("eid")) return "🌙";
  return "✨";
}

function formatTraits(traits: { type: string; description: string }[]) {
  if (!traits || traits.length === 0) return "No known traits";
  return traits
    .map((t) => `${t.type.replace(/_/g, " ")}: ${t.description}`)
    .join("; ");
}

function formatDate(date: Date): string {
  return formatInTimeZone(date, "UTC", "MMMM d, yyyy");
}

export async function createGiftNewsletter(
  userId: string
): Promise<{ html: string; names: string[] }> {
  const upcoming = await getUpcomingSpecialDays(userId);

  if (!upcoming.length) {
    const noSpecialDaysMessage = `
      <div style="text-align: center; padding: 20px 0;">
        <h2 style="color: #333; font-size: 24px; margin-bottom: 15px;">
          🌟 Daily GiftPonder Note
        </h2>
        
        <p style="font-size: 18px; color: #666; margin-bottom: 25px;">
          You don't have any special dates coming up in the next 60 days — yet!
        </p>
        
        <div style="
          background-color: #f9f9f9;
          border-radius: 12px;
          padding: 25px;
          margin: 20px 0;
          text-align: left;
          font-size: 16px;
          line-height: 1.6;
          color: #555;
        ">
          <p>
            That's perfectly okay. Well sort of... Here's something to think about:
          </p>
          
          <p>
            Psychologists have found that anticipating meaningful moments — even small ones — boosts happiness, deepens relationships, and gives us something positive to look forward to. Without these "emotional anchors," we can drift into routines and unintentionally miss moments that matter to those we care about.
          </p>
        </div>
        
        <div style="
          font-style: italic;
          margin: 30px 0;
          padding: 20px;
          border-left: 4px solid #e0e0e0;
          background-color: #fafafa;
          border-radius: 0 8px 8px 0;
        ">
          <p style="color: #666; font-size: 17px; margin: 0;">
            "The best time to plant a tree was 20 years ago. The second best time is now."
            <br/>
            <span style="font-size: 15px;">— Chinese Proverb 🌳</span>
          </p>
        </div>
        
        <p style="
          font-size: 16px;
          color: #666;
          background-color: #f0f7ff;
          padding: 20px;
          border-radius: 8px;
          margin-top: 25px;
        ">
          Take a minute today to add a birthday, anniversary, or milestone. Your future self (and your loved ones) will thank you.
        </p>
      </div>
    `;

    return {
      html: wrapInBeautifulEmail(noSpecialDaysMessage, false),
      names: [],
    };
  }

  const names = upcoming.map((d) => d.person.name);

  // Create table of upcoming special days
  const tableRows = upcoming
    .map((day) => {
      const emoji = getEmoji(day.title);
      const daysLeft = getDaysLeft(day.date);
      const daysLabel = sanitizeDaysLabelIn(daysLeft);
      return `
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${day.person.name}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${emoji} ${day.title}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${formatDate(day.date)}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${daysLabel}</td>
      </tr>
    `;
    })
    .join("");

  const upcomingDaysTable = `
    <div style="margin-bottom: 30px;">
      <h2 style="color:#333; font-size: 20px; margin-bottom: 15px;">Upcoming Special Days</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
        <thead>
          <tr style="background-color: #f8f8f8;">
            <th style="text-align: left; padding: 10px; border-bottom: 2px solid #ddd;">Person</th>
            <th style="text-align: left; padding: 10px; border-bottom: 2px solid #ddd;">Occasion</th>
            <th style="text-align: left; padding: 10px; border-bottom: 2px solid #ddd;">Date</th>
            <th style="text-align: left; padding: 10px; border-bottom: 2px solid #ddd;">Days Left</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    </div>
  `;

  // Group by title
  const groupedByOccasion: Record<string, typeof upcoming> = {};
  for (const d of upcoming) {
    const key = d.title;
    if (!groupedByOccasion[key]) groupedByOccasion[key] = [];
    groupedByOccasion[key].push(d);
  }

  const sections = await Promise.all(
    Object.entries(groupedByOccasion).map(async ([occasionTitle, entries]) => {
      const emoji = getEmoji(occasionTitle);

      const blockText = entries
        .map((d) => {
          const traits = formatTraits(d.person.traits);
          const rejected =
            d.person.rejectedGiftIdeas
              .map((r) => `- ${r.content}`)
              .join("\n") || "None";

          return `## ${d.person.name}\n\n**Trait Summary:** ${traits}\n\nPreviously Rejected Ideas:\n${rejected}`;
        })
        .join("\n\n");

      const prompt = `You're a thoughtful gift recommendation AI assistant for a personal gifting platform.\nCreate specific, meaningful, and original gift suggestions (2–3) for each person and occasion based on their traits. Speak about the person in 3rd person. Avoid any previously rejected ideas.\n\n# ${emoji} ${occasionTitle}\n\n${blockText}`;

      const res = await openai.chat.completions.create({
        model: "llama3-70b-8192",
        messages: [{ role: "user", content: prompt }],
      });

      return `
        <h1>${emoji} ${occasionTitle}</h1>
        ${markdownToHtml(res.choices[0].message.content || "")}
      `;
    })
  );

  return {
    html: wrapInBeautifulEmail(upcomingDaysTable),
    names,
  };
}

function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n\n/g, "<br/><br/>")
    .replace(/\n/g, "<br/>");
}

function wrapInBeautifulEmail(
  bodyHtml: string,
  hasUpcomingDays: boolean = true
): string {
  const preheaderText = hasUpcomingDays
    ? "Review your upcoming special days!"
    : "No Special Days Coming Up? Make sure!";

  return `
  <div style="
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f4f4f4;
    padding: 30px;
    color: #333;
  ">
    <!-- Preheader text - hidden but shown in email clients -->
    <div style="display: none; max-height: 0px; overflow: hidden;">
      ${preheaderText}
      <!-- Add some extra spaces to ensure the preheader text doesn't get cut off -->
      &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
    </div>
    <!-- End preheader -->

    <div style="
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    ">
      <h1 style="text-align:center; color:#222; font-size: 24px; margin-bottom: 20px;">
        🎁 GiftPonder
      </h1>

      ${bodyHtml}

      <p style="font-size: 14px; color: #888; text-align: center; margin-top: 40px;">
        You're receiving this because you use GiftPonder. <br/>
        Crafted with ❤️ to help you gift better.
      </p>
    </div>
  </div>
  `;
}
