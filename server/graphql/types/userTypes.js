exports.userTypes = `
    type UserOutput {
      _id: ID
      avatar: String
      username: String
      name: String
      email: String
      role: String
    }

    input SignUpInput {
      avatar: String
      username: String!
      name: String
      email: String!
      password: String!
      passwordConfirmation: String!
    }

    input SignInInput {
      email: String!
      password: String!
    }
`;
