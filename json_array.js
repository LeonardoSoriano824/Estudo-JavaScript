let produtos = [
    {nome: "Batata", preco: 2, estoque: 20},
    {nome: "Feijão", preco: 3, estoque: 10},
    {nome: "Pão", preco: 4, estoque: 14}
]

let lista_json = JSON.stringify(produtos)
//console.log(lista_json)

let objeto_json = JSON.parse(lista_json)
console.log(objeto_json[1].nome)