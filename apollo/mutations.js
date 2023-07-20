import { gql } from "@apollo/client";

export const CREATE_PORTFOLIO = gql`
  mutation CreatePortfolio {
    createPortfolio(
      input: {
        title: "Job in DSWT"
        company: "DSWT"
        companyWebsite: "www.google.com"
        location: "Spain, Barcelona"
        jobTitle: "Engineer"
        description: "Doing something, programing...."
        startDate: "2014-12-12T10:10Z"
        endDate: "2016-01-12T10:10Z"
      }
    ) {
      _id
      title
      company
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    }
  }
`;

export const UPDATE_PORTFOLIO = gql`
  mutation UpdatePortfolio($portfolioId: ID!) {
    updatePortfolio(
      id: $portfolioId
      input: {
        title: "Job in DSWT updated"
        company: "DSWT"
        companyWebsite: "www.google.com"
        location: "Spain, Barcelona"
        jobTitle: "Engineer"
        description: "Doing something, programing...."
        startDate: "2014-12-12T10:10Z"
        endDate: "2016-01-12T10:10Z"
      }
    ) {
      _id
      title
      company
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    }
  }
`;

export const DELETE_PORTFOLIO = gql`
  mutation DeletePortfolio($portfolioId: ID!) {
    deletePortfolio(id: $portfolioId)
  }
`;

export const USER_SIGNUP = gql`
  mutation SignUp {
    signUp(
      input: {
        avatar: "aaaaa"
        email: "devvidya2004@gmail.com"
        name: "aaaaaa"
        password: "fdfdfdsf"
        passwordConfirmation: "Admin@123"
        username: "vidyasagar"
      }
    ) {
      name
      username
      password
      email
      avatar
    }
  }
`;
