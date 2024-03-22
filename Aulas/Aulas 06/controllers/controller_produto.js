const produtos = [];

function listarTodos(req, res) {
    res.json(produtos);
}

function buscarpeloId(req, res) {
    const { produtos } = req.params;
    const produtoencontrado = produtos.find(item => item.id == produtos);

    if (produtoencontrado) {
        res.json(produtoencontrado);
    } else {
        res.status(404).json({ msg: 'Produto não encontrado' });
    }
}

function criar(req, res) {
    const { nome, preco } = req.body;
    if (nome && preco) {
        const produtoNovo = {
            id: produtos.length + 1,
            nome,
            preco
        }
        produtos.push(produtoNovo);
        res.status(201).json(produtoNovo);
    } else {
        res.status(422).json({ msg: "Nome e preço são obrigatórios" });
    }
}

function atualizar(req, res) {
const { produtos } = req.params;
    const produtoencontrado = produtos.find(item => item.id == produtos);

    if (produtoencontrado) {
        const { nome, preco } = req.body;
    if (nome && preco) {
    produtoencontrado.nome = nome;
    produtoencontrado.preco = preco;
    res.json(produtoencontrado);
    } else {
        res.status(422).json({ msg: "Nome e preço são obrigatórios" });
    }
    } else {
        res.status(404).json({ msg: 'Produto não encontrado' });
    }
}

function remover(req, res) {
const {produtos} = req.params;
const posicao = produtos.findIndex(item => item.id == produtos);
if (posicao >= 0 ) {
    produtos.splice(posicao, 1);
    res.status(204).end();
} else {
    res.status(404).json({ msg:"Produto não encontrado"});
}
}

module.exports = { listarTodos, buscarpeloId, criar, atualizar, remover }