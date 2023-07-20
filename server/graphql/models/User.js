class User {
  constructor(model) {
    this.Model = model;
  }
  async signIn(signInData, context) {
    try {
      const user = await context.authenticate(signInData);
      return user;
    } catch (error) {
      return error;
    }
  }
  signUp(signUpData) {
    if (signUpData.password !== signUpData.passwordConfirmation) {
      throw new Error("Password must be the same as confirm password");
    }
    return this.Model.create(signUpData);
  }
  signOut(context) {
    try {
      context.logout();
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = User;
