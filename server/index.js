const express = require("express");
const next = require("next");
const cors = require("cors");

//connect to data
const db = require("./database");
db.connect();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_DEV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();

  require("./middlewares").init(server, db);

  server.use(
    cors({
      origin: ["https://studio.apollographql.com"],
    })
  );

  const apolloServer = require("./graphql").createApolloServer();
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: server, cors: false });

  server.all("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(port, (error) => {
    if (error) {
      throw error;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
