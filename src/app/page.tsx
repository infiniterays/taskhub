import Image from "next/image";
import Link from "next/link";

import { SignIn, SignOut } from "@/components/auth";
import { auth } from "@/lib/auth";

export default async function Page() {
  const session = await auth();

  return (
    <div className="flex items-start space-x-4">
      {session ? (
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <Link href="/todo">Go to Todo</Link>
            <p>{session?.user?.name}</p>
            <p>{session?.user?.email}</p>
            <SignOut>Sign out</SignOut>
          </div>
          <div className="flex space-x-4">
            <Image src={session?.user?.picture} width={100} height={100} alt="Profile Pic" />
          </div>
        </div>
      ) : (
        <SignIn provider="github">Sign in with GitHub</SignIn>
      )}
    </div>
  );
}
