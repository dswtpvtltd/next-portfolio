const passport = require("passport");

//options={ email, password }
const authenticateUser = (req, options) => {
  return new Promise((resolve, reject) => {
    const done = (error, user) => {
      if (error) {
        return reject(new Error(error));
      }
      if (user) {
        req.login(user, (error) => {
          if (error) {
            return reject(new Error(error));
          }
          return resolve(user);
        });
      } else {
        return reject(new Error("Invalid password or email"));
      }
    };
    const authFn = passport.authenticate("graphql", {}, done);
    authFn(options);
  });
};

exports.buildAuthContext = (req) => {
  const auth = {
    authenticate: (options) => authenticateUser(req, options),
    logout: () => {
      req.logOut(req.user, (error) => {
        if (error) console.log(error);
      });
    },
    isAuthenticated: () => req.isAuthenticated(),
    getUser: () => req.user,
  };

  return auth;
};
