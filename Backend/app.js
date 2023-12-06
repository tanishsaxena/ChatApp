import { PrepareRoutes } from "./Router.js";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import MongoConnect from "./database/mongo.js";
import { Socket } from "./Socket.js";
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const port = 8080;
const server = http.createServer(app);

const io = socketIO(server);

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);

PrepareRoutes(app);
app.use("/chat", Socket(io));

MongoConnect().catch((err) => {
  console.log("error while connecting database", err);
  process.exit(0);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
