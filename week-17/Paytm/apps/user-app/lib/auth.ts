import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import {User} from "@prisma/client"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        number: {
          label: "Phone number",
          type: "text",
          placeholder: "1231231231",
          required: true,
        },
        password: { label: "Password", type: "password", required: true },
      },
      // TODO: User credentials type from next-aut
      async authorize(credentials: User) {
        // Do zod validation, OTP validation here

        const hashedPassword = await bcrypt.hash(credentials.password, 10);

        const existingUser = await db.user.findFirst({
          where: {
            number: credentials.number,
          },
        });

        if (existingUser) {
          const passwordValidation = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );

          if (passwordValidation) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.number,
            };
          }
          return null;
        }

        try {
          const user = await db.user.create({
            data: {
              number: credentials.number,
              password: hashedPassword,
            },
          });

          return {
            id: user.id.toString(),
            name: user.name,
            number: user.number,
          };
        } catch (e) {
          console.error(e);
        }

        return null;
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    // TODO: can u fix the type here? Using any is bad
    async session({ token, session }: any) {
      session.user.id = token.sub;

      return session;
    },
  },
};
