const botoesFiltro = document.querySelectorAll('.btn');

botoesFiltro.forEach(botao => botao.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    let livrosFiltrados = this.value == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria.call(this);
    exibirLivrosNaTela(livrosFiltrados);
    if (this.value == 'disponivel') {
        const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtrarPorCategoria() {
    return livros.filter(livro => livro.categoria == this.value);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalLivrosDisponiveisNaTela(valorTotal) {
    secaoValorTotalLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">R$${valorTotal}</span></p>
        </div>
    `;
}