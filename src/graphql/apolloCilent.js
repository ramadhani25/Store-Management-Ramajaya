import { ApolloClient, InMemoryCache } from "@apollo/client";

import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
  uri: "https://adapted-redfish-37.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "VQ3a4FSKYaY2CoteC9XCyhbAIaSuWRx7LbtgNuzNA1DY2uo2dDhvx6bV9UbrvFpV",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://adapted-redfish-37.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "VQ3a4FSKYaY2CoteC9XCyhbAIaSuWRx7LbtgNuzNA1DY2uo2dDhvx6bV9UbrvFpV",
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
