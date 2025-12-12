let produtos = [
    {nome: "Batata", preco: 2, estoque: 20},
    {nome: "Feijão", preco: 3, estoque: 10},
    {nome: "Pão", preco: 4, estoque: 14}
]

localStorage.setItem("produtos", JSON.stringify(produtos))

let lista = JSON.parse(localStorage.getItem("produtos"))

console.log(lista[1].nome)