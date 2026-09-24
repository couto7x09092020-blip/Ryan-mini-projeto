const express = require("express");
const cors = require("cors");
//eles carregam o express e o cors
// O express facilita a criação de servidores API, o Cors permite que o servidor receba requisições de outras origens
const app = express();
// express(); você está chamando o Express para criar uma nova aplicação, que é guardada dentro da variavel app
app.use(cors());
// aqui esta falando para usar o cors nessa aplicação
app.use(express.json());
// aqui esta falando para usar 
app.get("/", (req, res) => {
    res.send("API funcionando!");
});
app.get("/item",(req,res) =>{ //pef
    const items = [{
        nome: "processador",
        preço: 2300,
        categoria: "Hadware"
    }];
    res.json(items); //resposta dos items
});
app.listen(3000, () => {
    console.log("Servidor Rodando na porta 3000");
});
const url = "http://localhost:3000/item";
fetch(url); // vai requisitar a url


