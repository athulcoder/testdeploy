const express = require("express");
require("dotenv");
const app = express();

const PORT = 8080;

app.listen(process.env.PORT, () =>
  console.log("App is lisening on PORT", PORT)
);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Hospital Dashboard</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1> Login page </h1>");
});

app.get("/api", (req, res) => {
  res.json({ money: 300, title: "Athul" });
});
