import NextAuth, { type DefaultSession } from "next-auth";
import { UserRole } from "@prisma/client";
import { JWT } from "@auth/core/jwt";

export type ExtendedUser = DefaultSession["user"] & {
  customField: string;
  role: UserRole;
};

declare module "@auth/core" {
  interface Session {
    user: ExtendedUser;
  }
}
