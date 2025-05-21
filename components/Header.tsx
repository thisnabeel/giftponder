import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";
import React from "react";

const Header: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log({ session });
  const isAdmin = session?.user?.admin; // Assuming 'admin' is part of the user object

  return (
    <nav>
      {session && (
        <div className="left m-4">
          <button
            className="bold btn btn-outline-primary"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            Sign Out
          </button>

          {isAdmin && (
            <button
              className="bold btn btn-outline-success"
              onClick={() => router.push("/preview/gift-newsletter")}
            >
              Newsletter
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
