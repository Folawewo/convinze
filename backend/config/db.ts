import mongoose, { mongo } from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions)
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((error) => {
    console.log("Database Connection Failed", error);
  });
