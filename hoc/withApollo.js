import { withApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);

//next-apollo work with "@apollo/client"
//next-with-apollo work with "@apollo/react-hooks"
