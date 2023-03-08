const express = require("express");
const next = require("next");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");
//Resolvers
const {
  portfolioQueries,
  portfolioMutations,
} = require("./graphql/resolvers/portfolioResolver");

//Types
const { portfolioTypes } = require("./graphql/types/portfolioTypes");

//connect to data
require("./database/index").connect();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_DEV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();

  //Construct a schema using GRAPHQL Schema Language
  const typeDefs = gql(`
    ${portfolioTypes}

    type Query {
      portfolio(id: ID!): Portfolio
      portfolios: [Portfolio]
    }

    type Mutation {
      createPortfolio(input: PortfolioInput): Portfolio
      updatePortfolio(id: ID!, input:PortfolioInput): Portfolio
      deletePortfolio(id: ID!): ID
    }
  `);

  // The root provides a resolver for each API
  const resolvers = {
    Query: {
      ...portfolioQueries,
    },
    Mutation: {
      ...portfolioMutations,
    },
  };

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: server, cors: false });
  server.use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
    })
  );

  server.all("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(port, (error) => {
    if (error) {
      throw error;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
