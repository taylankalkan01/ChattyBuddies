//npm packages
import express, { Application, Response } from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import * as helmet from "helmet";
import config from "config";

// Custom Modules, Packages, Configs, etc.
import { MongoConnection } from "./databases/mongoDB";
import { initRoutes } from "./routes/routes";

const app: Application = express();
app.use(express.json());
app.use(cookieParser());
app.use(helmet.default());

app.get("/", (_, res: Response) => {
  res.send("Chatty Buddies!");
});

const PORT = config.get<Number>("port");
app.listen(PORT, async () => {
  console.log(`The application is listening on port ${PORT}!`);
  await MongoConnection();
  initRoutes(app);
});
