let produto = {
    nome:null,
    preco:null,
    emEstoque:null
}

function mostrarProduto({nome, preco, emEstoque}) {
    console.log("Nome:", nome)
    console.log("Preço:", preco)
    console.log("Estoque:", emEstoque)
}

mostrarProduto({nome:"Batata", preco:2.00, emEstoque:20})