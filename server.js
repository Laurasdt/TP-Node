const express = require("express");
require("dotenv").config();
const { formatBirthDate } = require("./utils/functions");
const bodyParser = require("body-parser");
const dayjs = require("dayjs");
require("dayjs/locale/fr");

const { PORT, HOSTNAME } = process.env;

const app = express();

let students = [
  { name: "Sonia", birth: "2019-14-05" },
  { name: "Antoine", birth: "2000-12-05" },
  { name: "Alice", birth: "1990-14-09" },
  { name: "Sophie", birth: "2001-10-02" },
  { name: "Bernard", birth: "1980-21-08" },
];

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("assets"));

app.set("view engine", "pug");
app.set("views", "./view");

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/add-user", (req, res) => {
  console.log(req.body.birth);

  const { name, birth } = req.body;
  if (name && birth) {
    students.push({ name, birth });
  }
  res.redirect("/users");
});

app.get("/users", (req, res) => {
  const formattedStudents = students.map((student) => ({
    ...student,
    birth: formatBirthDate(student.birth),
  }));
  console.log(formattedStudents);
  res.render("users", { students: formattedStudents });
});

app.listen(PORT || 8080, HOSTNAME || "127.0.0.1", () => {
  console.log(
    `Serveur en cours d'exécution à l'adresse : http://${
      HOSTNAME || "127.0.0.1"
    }:${PORT || 8080}`
  );
});
