async function carregarDados() {

    const url = "https://friendly-eureka-jrgxpqqx4jjcq6g4-3000.app.github.dev/";
    const resposta = await fetch(url);
    const produtos = await resposta.json();
    const listaProdutos = document.getElementById("lista-produtos");

listaProdutos.innerHTML = "";

    produtos.forEach((produto) => {

        listaProdutos.innerHTML += `
            <div class="card">
                <h2>${produto.nome}</h2>
                <p>Categoria: ${produto.categoria}</p>
                <p class="preco">R$ ${produto.preco}</p>
            </div>
        `;
    });
}
    carregarDados();