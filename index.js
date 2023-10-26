const http = require("http");
const fs = require("fs");

const form = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  const method = req.method;

  if (pathName === "/") {
    const data = fs.readFileSync("./dataFile.txt", "utf-8");
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write(data);
    res.end(form);
  }

  if (pathName === "/message" && method === "POST") {
    const messageList = [];
    req.on("data", (chunk) => {
      messageList.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(messageList).toString();
      const messageData = parsedBody.split("=")[1];
      fs.writeFileSync("./dataFile.txt", messageData, "utf-8");
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
});

server.listen(4000, "127.0.0.1", () => {
  console.log("Listening to requests on port 4000");
});
