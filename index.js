const express = require("express");
require("dotenv");
const app = express();
PORT = 3000;
app.listen(PORT, () => console.log("App is lisening on PORT", PORT));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Hospital Dashboard</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1> Login page </h1>");
});
app.get("/dashboard", (req, res) => {
  res.send("<h1>Dashboard</h1>");
});
app.get("/api", (req, res) => {
  res.json({ money: 300, title: "Athul" });
});
