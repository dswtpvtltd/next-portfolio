const express = require("express");
const next = require("next");
const cors = require("cors");

//connect to data
require("./database/index").connect();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_DEV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();

  const apolloServer = require("./graphql").createApolloServer();
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: server, cors: false });

  server.use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
    })
  );

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
