const http = require("http");

const route = require("./route.js");

// create server
const server = http.createServer(route.handler);

server.listen(4000, "127.0.0.1", () => {
  console.log("Listening to requests on port 4000");
});
