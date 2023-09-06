import GitHub from "@auth/core/providers/github";

import { env } from "@/lib/env";

import type { NextAuthConfig } from "next-auth";

export default {
  providers: [GitHub],
  debug: env.NODE_ENV === "development",
  session: {
    strategy: "jwt"
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    }
  },
  pages: {
    signIn: "/signin"
  }
} satisfies NextAuthConfig;
