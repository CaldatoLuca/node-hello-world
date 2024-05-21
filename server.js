require("dotenv").config();

const http = require("http");

const { randomWord } = require("./function");

const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";
const word = process.env.WORD || "Hello World";

http
  .createServer((req, res) => {
    const random = randomWord();

    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(`<h1>${word}</h1> <h1>${random}</h1>`);
  })
  .listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`);
  });
