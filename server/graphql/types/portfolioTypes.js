const portfolioField = `
title: String
company: String
companyWebsite: String
location: String
jobTitle: String
description: String
startDate: String
endDate: String
`;

exports.portfolioTypes = `type Portfolio {
      _id: ID!
      ${portfolioField}
    }

    input PortfolioInput {
      ${portfolioField}
    }
`;
