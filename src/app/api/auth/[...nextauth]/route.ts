import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
		}),
		// TODO: Setup Database adapter in order to use this
		// EmailProvider({
		//     server: process.env.EMAIL_SERVER,
		//     from: process.env.EMAIL_FROM,
		//     maxAge: 24 * 60 * 60, // Seconds how long email links are valid for (default 24h)
		// }),
	],
	session: {
		// Use JSON Web Tokens for session instead of database sessions.
		strategy: "jwt",
		// Seconds - How long until an idle session expires and is no longer valid.
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
});

export { handler as GET, handler as POST };
