"use client";

import { useState } from "react";
import auth from "../app/middleware";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

export function UserInfo() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  if (loading) {
    auth().then((sessionData) => {
      setSession(sessionData);
      setLoading(false);
    });

    return <div>Loading...</div>;
  }

  return (
    <div>
      {session ? (
        <div>
          {session.user ? session.user.name : "User"}{" "}
          <span className="text-xs text-zinc-400 mr-3">
            #{session.user ? session.user.id : "ID"}
          </span>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <span className="mr-4">Welcome, Guest!</span>
          <LoginButton />
        </div>
      )}
    </div>
  );
}
