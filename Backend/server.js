const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    const item = {
        nome: "processador",
        preco: 2300,
        categoria: "Hardware"
    };

    res.json(item);
});

app.listen(3000, () => {
    console.log("Servidor Rodando na porta 3000");
});