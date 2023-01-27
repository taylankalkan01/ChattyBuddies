import mongoose, { ConnectOptions } from "mongoose";
import config from "config";

const MONGO_URL = config.get<any>("MONGO_URL");
mongoose.set("strictQuery", false);

export const MongoConnection = async () => {
  await mongoose
    .connect(MONGO_URL || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions)
    .then((db) => {
      console.log("Database Connected Successfuly.");
    })
    .catch((err) => {
      console.log("Error Connectiong to the Database: ", err);
    });
};
