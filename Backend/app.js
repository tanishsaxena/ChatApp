import { PrepareRoutes } from "./routes.js";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import MongoConnect from "./database/mongo.js";

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use(cors({
  origin: '*'
}));
PrepareRoutes(app);

MongoConnect().catch((err) => {
  console.log("error while connecting database", err);
  process.exit(0);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
