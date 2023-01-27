import cors from "cors";
import { Application } from "express";

const initCors = (app: Application) => {
  app.use(
    cors({
      origin: [`http://localhost:3001/`],
      methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
      credentials: true
    })
  );
};

export default initCors;
