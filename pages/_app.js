import "../styles/globals.css";
// import { ApolloProvider } from "@apollo/client";
// import client from "../lib/apollo-client";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    // <ApolloProvider client={client}>
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
    // </ApolloProvider>
  );
}

export default MyApp;
