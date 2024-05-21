//importo dotenv per poter leggere le variabili dal file .env
require("dotenv").config();

//importo il modulo http per creare il server
const http = require("http");

// importo la funzione randomWord dal file function.js
const { randomWord } = require("./function");

// prendo i valori delle variabili dal file env, metto anche valori di default
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";
const word = process.env.WORD || "Hello World";

//creo e avvio il server
http
  .createServer((req, res) => {
    //genera una citazione casuale a ogni richiesta (refresh)
    const random = randomWord();

    if (req.url === "/favicon.ico") {
      res.writeHead(404, {
        "Content-Type": "text/html",
      });

      res.end();
      return;
    }

    //intestazione della risposta http
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    //invia la risposta
    res.end(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Node Hello World</title>
        <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
          body {
            background-color: rgb(205, 232, 229);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          body h1:nth-child(1) {
            color: rgb(77, 134, 156);
            text-align: center;
            margin-bottom: 20px;
          }
          body h1:nth-child(2) {
            color: rgb(122, 178, 178);
          }
        </style>
      </head>
      <body>
        <div>
        <h1>${word}</h1>
        <h1>${random}</h1>
        </div>
      </body>
    </html>
    `);
  })
  .listen(port, host, () => {
    //messaggio in console quando si avvia il server
    console.log(`Server avviato su http://${host}:${port}`);
  });
