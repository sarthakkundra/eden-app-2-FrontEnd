import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

// const scopes = ["identify"].join(" ");

// export default NextAuth({
//   providers: [
//     DiscordProvider({
//       clientId: process.env.DISCORD_CLIENT_ID,
//       clientSecret: process.env.DISCORD_CLIENT_SECRET,
//       authorization: { params: { scope: scopes } },
//     }),
//   ],
// });

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      secret: process.env.NEXT_PUBLIC_SECRET,
      //   authorization: {params: {scope: scopes}},
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
        // session = {
        //   ...session,
        //   user: {
        //     id: token.uid,
        //     ...session.user,
        //   },
        // };
      }

      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
});
