const express = require("express");
const cors = require("cors");
const app = express();

    app.use(cors());
    app.use(express.json());

app.get("/", (req, res) => {
    res.json([
        {
            nome: "Processador",
            preco: 1250,
            categoria: "Hardware"
        },
        {
            nome: "Mouse Gamer",
            preco: 250,
            categoria: "Periféricos"
        },
        {
            nome: "Placa De Video",
            preco: 799,
            categoria: "Hardware"
        },
        {
            nome: "Monitor 24 Polegadas",
            preco: 1800,
            categoria: "Monitores"
        }
    ]);
});
app.listen(3000, () => {
    console.log("Servidor funcionando na porta 3000");
});