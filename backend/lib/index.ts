//npm packages
import express, { Application, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import * as helmet from "helmet";

// Custom Modules, Packages, Configs, etc.
import { MongoConnection } from "./databases/mongoDB";
import { initRoutes } from "./routes/routes";
dotenv.config({
  path: "./.env.local"
});

const app: Application = express();
app.use(express.json());
app.use(cookieParser());
app.use(helmet.default());

app.get("/", (_, res: Response) => {
  res.send("Chatty Buddies!");
});

const PORT = process.env.APP_PORT;
app.listen(PORT, async () => {
  console.log(`The application is listening on port ${PORT}!`);
  await MongoConnection();
  initRoutes(app);
});
