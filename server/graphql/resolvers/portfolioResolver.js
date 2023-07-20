exports.portfolioQueries = {
  portfolio: async (_root, args, ctx) => {
    return await ctx.models.Portfolio.getById(args.id);
  },
  portfolios: async (_root, _aargs, ctx) => {
    return await ctx.models.Portfolio.getAll();
  },
};

exports.portfolioMutations = {
  createPortfolio: async (_root, { input }, ctx) => {
    const newPortfolio = await ctx.models.Portfolio.create(input);
    return newPortfolio;
  },
  updatePortfolio: async (_root, { id, input }, ctx) => {
    const newPortfolio = await ctx.models.Portfolio.findAndUpdate(id, input);
    return newPortfolio;
  },
  deletePortfolio: async (_root, { id }, ctx) => {
    await ctx.models.Portfolio.findAndDelete(id);
    return id;
  },
};
