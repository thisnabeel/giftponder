// types/next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // 👈 you are adding this
      admin: boolean;
      emailVerified: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    admin: boolean;
    emailVerified: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}
