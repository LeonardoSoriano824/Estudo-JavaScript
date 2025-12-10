let produtos = [
    {nome: "Notebook", preco: 2500},
    {nome: "Mouse", preco: 80},
    {nome: "Teclado", preco: 120}
]

let mouse = produtos.find(produto => produto["nome"] === "Mouse")
//console.log(mouse)
let maior = produtos.filter(produto => produto["preco"] > 100)
//console.log(maior)
let nomes = produtos.map(produto => produto["nome"])
//console.log(nomes)
let emEstoque = produtos.map(produto => {
    return  {
        ...produto,
        emEstoque: true
    }
})
//console.log(emEstoque)
let notebook = produtos.find(produto => produto["nome"] === "Notebook")
notebook.preco = 3000
//console.log(produtos)