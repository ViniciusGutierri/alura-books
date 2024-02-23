let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    try {
        const res = await fetch(endpointDaAPI);
        livros = await res.json();

        let livrosComDesconto = aplicarDesconto(livros);
        
        exibirLivrosNaTela(livrosComDesconto);
    } catch (error) {
        secaoLivros.innerHTML = `
            <p>Houve um erro ao carregar os livros: ${error}</p>
        `;
    }
}