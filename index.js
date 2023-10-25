const http = require("http");

const server = http.createServer((request, response) => {
  const pathName = request.url;

  if (pathName === "/" || pathName === "/node") {
    response.end("Welcome to my Node Js project");
  } else if (pathName === "/home") {
    response.end("Welcome home");
  } else if (pathName === "/about") {
    response.end("Welcome to About Us page");
  } else {
    response.end("Page not found");
  }
});

server.listen(4000, "127.0.0.1", () => {
  console.log("Listening to requests on port 4000");
});
