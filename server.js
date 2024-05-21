const http = require("http");

const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end("<h1>Il mio server</h1>");
  })
  .listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`);
  });
