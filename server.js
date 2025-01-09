const express = require("express");
require("dotenv").config();

const { PORT, HOSTNAME } = process.env;

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("assets"));

app.set("view engine", "pug");
app.set("views", "./view");

app.get("/", (req, res) => {
  res.send("Le serveur Express fonctionne !");
});

app.listen(PORT || 8000, HOSTNAME || "127.0.0.1", () => {
  console.log(
    `Serveur en cours d'exécution à l'adresse : http://${
      HOSTNAME || "127.0.0.1"
    }:${PORT || 8000}`
  );
});
node;
