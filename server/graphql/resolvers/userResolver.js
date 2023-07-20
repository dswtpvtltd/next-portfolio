exports.userMutation = {
  signUp: async (_root, { input }, ctx) => {
    const registeredUser = await ctx.models.User.signUp(input);
    return registeredUser;
  },
  signIn: (_root, { input }, ctx) => {
    return ctx.models.User.signIn(input, ctx);
  },
  signOut: (_root, _args, ctx) => {
    return ctx.models.User.signOut(ctx);
  },
};
