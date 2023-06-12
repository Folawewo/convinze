import { error } from "console";
import http from "http";
import mongoose from "mongoose";
const app = require("./app");

const PORT = process.env.PORT || 80;

const server = http.createServer(app);

mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
    console.log("Database Connected!")
}).catch((err) => {
    console.log("Error connecting to Database", error)
    console.log(error)
})


server.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}...`)
})
