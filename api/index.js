const express = require("express");
const app = express();

app.get('/locations', (req, res) => {res.sendFile('locations.json', {root: __dirname})});
app.get("/express", (req, res) => res.sendFile("index.html", { root: '\express' }));
app.get("/cliente_servidor", (req, res) => res.sendFile("index.html", { root: '\cliente_servidor' }));
app.use(express.static('public'))



app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;