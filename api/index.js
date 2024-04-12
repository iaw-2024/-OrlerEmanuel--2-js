const express = require("express");
const path = require("path");
const app = express();


app.get('/locations', (req, res) => {res.sendFile(path.join(process.cwd(),"public","dom","locations.json"))});
app.get("/express", (req, res) => res.sendFile("index.html", { root: '\express' }));
app.get("/cliente_servidor", (req, res) => res.sendFile("index.html", { root: '\cliente_servidor' }));
app.use(express.static('public'))



app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;