import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";

export const authOptions = {
  providers: [
    EmailProvider({
      server: {
        host: "live.smtp.mailtrap.io",
        port: 587,
        auth: {
          user: "api",
          pass: "a83026b2acf75dec7e2ba7d0c831c9d4",
        },
      },
      from: "hello@tiagoalves.ca",
    }),
  ],
  pages: {
    signIn: "/admin/login",
    error: "/auth/error",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

