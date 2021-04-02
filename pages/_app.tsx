import "../styles/globals.css";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { RegistryProvider } from "../contexts/RegistryContext";
import { LoginProvider } from "../contexts/LoginContext";

export const URI = "http://test.frontend.api.brainny.cc/graphql";

function MyApp({ Component, pageProps }) {
  const httpLink = createHttpLink({
    uri: URI,
  });

  const authLink = setContext((_, { headers }) => {
    const token = sessionStorage.getItem("token");

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <LoginProvider>
        <RegistryProvider>
          <Component {...pageProps} />
        </RegistryProvider>
      </LoginProvider>
    </ApolloProvider>
  );
}

export default MyApp;
