const Portfolio = require("../../database/models/portfolio");

exports.portfolioQueries = {
  portfolio: async (_root, args) => {
    return await Portfolio.findById(args.id);
  },
  portfolios: async () => {
    return await Portfolio.find({});
  },
};

exports.portfolioMutations = {
  createPortfolio: async (_root, { input }) => {
    const newPortfolio = await Portfolio.create(input);
    return newPortfolio;
  },
  updatePortfolio: async (_root, { id, input }) => {
    const newPortfolio = await Portfolio.findByIdAndUpdate(id, input, {
      new: true,
    });
    return newPortfolio;
  },
  deletePortfolio: async (_root, { id }) => {
    await Portfolio.findByIdAndRemove(id);
    return id;
  },
};
