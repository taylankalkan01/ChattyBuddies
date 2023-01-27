import dotenv from "dotenv";
dotenv.config({
    path: ".env.local"
  });
export default {
    port: process.env.APP_PORT,
    MONGO_URL:process.env.MONGO_URL,
    ACCESS_TOKEN_PRIVATE_KEY:process.env.ACCESS_TOKEN_PRIVATE_KEY,
  };