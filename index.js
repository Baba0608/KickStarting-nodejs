const http = require("http");

const server = http.createServer((request, response) => {
  response.end("Baba fakruddin");
});

server.listen(4000, "127.0.0.1", () => {
  console.log("Listening to requests on port 4000");
});
