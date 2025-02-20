import "../styles/global.css";

import { ApolloProvider } from "@apollo/client";
import { UserProvider } from "@context/eden";
import { apolloClient } from "@graphql/eden";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import * as React from "react";
import { AppLayout } from "ui";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <UserProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </UserProvider>
      </ApolloProvider>
    </SessionProvider>
  );
};

export default App;
