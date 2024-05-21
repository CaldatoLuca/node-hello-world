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

    //intestazione della risposta http
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    //invia la risposta
    res.end(`<h1>${word}</h1> <h1>${random}</h1>`);
  })
  .listen(port, host, () => {
    //messaggio in console quando si avvia il server
    console.log(`Server avviato su http://${host}:${port}`);
  });
