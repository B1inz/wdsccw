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
          pass: "0b46a9aecd846cfdaa9201969cad7868",
        },
      },
      from: "hello@demomailtrap.co",
    }),
  ],
  pages: {
    signIn: "/admin/login",
    error: "/auth/error",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

