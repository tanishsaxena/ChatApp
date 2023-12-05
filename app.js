import { PrepareRoutes } from "./routes.js";

import express from "express";
import bodyParser from "body-parser";
import MongoConnect from "./database/mongo.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());

PrepareRoutes(app);

MongoConnect().catch((err) => {
  console.log("error while connecting database", err);
  process.exit(0);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
