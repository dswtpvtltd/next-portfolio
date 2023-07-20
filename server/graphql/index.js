const mongoose = require("mongoose");
const { ApolloServer, gql } = require("apollo-server-express");

//Resolvers
const {
  portfolioQueries,
  portfolioMutations,
} = require("./resolvers/portfolioResolver");
const { userMutation } = require("./resolvers/userResolver");

//Types
const { portfolioTypes } = require("./types/portfolioTypes");
const { userTypes } = require("./types/userTypes");
const { buildAuthContext } = require("./context");

//Graphql Models
const Portfolio = require("./models/Portfolio");
const User = require("./models/User");

exports.createApolloServer = () => {
  //Construct a schema using GRAPHQL Schema Language
  const typeDefs = gql(`
    ${portfolioTypes}
    ${userTypes}

    type Query {
      portfolio(id: ID!): Portfolio
      portfolios: [Portfolio]
    }

    type Mutation {
      createPortfolio(input: PortfolioInput): Portfolio
      updatePortfolio(id: ID!, input:PortfolioInput): Portfolio
      deletePortfolio(id: ID!): ID

      signUp(input: SignUpInput): UserOutput
      signIn(input: SignInInput): UserOutput
      signOut: Boolean
    }`);

  // The root provides a resolver for each API
  const resolvers = {
    Query: {
      ...portfolioQueries,
    },
    Mutation: {
      ...portfolioMutations,
      ...userMutation,
    },
  };

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      ...buildAuthContext(req),
      models: {
        Portfolio: new Portfolio(mongoose.model("Portfolio")),
        User: new User(mongoose.model("User")),
      },
    }),
  });

  return apolloServer;
};
