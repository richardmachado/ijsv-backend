const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

const loginRouter = require("./auth/auth-router");
const temasRouter = require("./temas/temas-router");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", loginRouter);
server.use("/api/temas", temasRouter);

server.get("/", (req, res) => {
  res.send("server's here");
});

module.exports = server;
