const mongoose = require("mongoose");
const { ApolloServer, gql } = require("apollo-server-express");

//Resolvers
const {
  portfolioQueries,
  portfolioMutations,
} = require("./resolvers/portfolioResolver");

//Types
const { portfolioTypes } = require("./types/portfolioTypes");

//Graphql Models
const Portfolio = require("./models/Portfolio");

exports.createApolloServer = () => {
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
    context: () => ({
      models: {
        Portfolio: new Portfolio(mongoose.model("Portfolio")),
      },
    }),
  });

  return apolloServer;
};
