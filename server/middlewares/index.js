const session = require("express-session");
const config = require("../config/dev");
const passport = require("passport");
const bodyParser = require("body-parser");

exports.init = (server, db) => {
  require("./passport").init(passport);

  const sess = {
    name: "portfolio-session",
    secret: config.SESSION_SCRETE,
    cookie: { maxAge: 2 * 60 * 60 * 1000 },
    resave: false,
    saveUninitialized: false,
    store: db.initSessionStore(),
  };

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(session(sess));
  server.use(passport.initialize());
  server.use(passport.session());
};
