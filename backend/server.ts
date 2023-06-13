import http from "http";
import "./config/db";
const app = require("./app");

const PORT = process.env.PORT || 80;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}...`);
});
