"use client";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      <h1>home</h1>
      {session && <p>{session.user.name}</p>}
      <div className="flex flex-col">
        <button onClick={() => signIn("google")} className="border max-w-24">
          continuer avec google
        </button>
        <button onClick={() => signIn("github")} className="border max-w-24">
          continuer avec github
        </button>
      </div>
    </>
  );
}
