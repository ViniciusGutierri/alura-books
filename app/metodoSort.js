let btnOrdenarPreco = document.querySelector('#btnOrdenarPorPreco');

btnOrdenarPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirLivrosNaTela(livrosOrdenados);
}