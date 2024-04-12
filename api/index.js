const express = require("express");
const path = require("path");
const app = express();


app.get('/locations', (req, res) => {res.sendFile(path.join(process.cwd(),"public","dom","locations.json"))});
app.get("/express", (req, res) => res.sendFile(path.join(process.cwd(),"public","express","index.html")));
app.get("/cliente_servidor", (req, res) => res.sendFile(path.join(process.cwd(),"public","cliente_servidor","index.html")));
app.use(express.static('public'))



app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;