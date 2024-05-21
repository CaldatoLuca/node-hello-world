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
      res.writeHead(404);

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
          div{
            text-align: center;
          }
          body h1:nth-child(1) {
            color: rgb(77, 134, 156);
            margin-bottom: 20px;
          }
          body h1:nth-child(2) {
            color: rgb(122, 178, 178);
            margin-bottom: 10px;
          }
          button {
            background-color: rgb(77, 134, 156);
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }
          button:hover {
            background-color: rgb(122, 178, 178);
          }
          button:active {
            background-color: rgb(50, 90, 110);
          }
        </style>
        <script>
          function reloadPage() {
           window.location.reload();  
          }
        </script>
      </head>
      <body>
        <div>
        <h1>${word}</h1>
        <h1>${random}</h1>
        <button onclick="reloadPage()">Generate Random Quote</button>
        </div>
      </body>
    </html>
    `);
  })
  .listen(port, host, () => {
    //messaggio in console quando si avvia il server
    console.log(`Server avviato su http://${host}:${port}`);
  });
