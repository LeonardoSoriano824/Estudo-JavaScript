let pessoas = [
    {nome: "Leonardo", idade: 24, cidade: "São Paulo"},
    {nome: "João", idade: 25, cidade: "São Paulo"},
    {nome: "Maria", idade: 30, cidade: "Rio de Janeiro"}
]

let resultado = pessoas.find(pessoa => pessoa["nome"] === "João")
console.log(resultado)

let idade = pessoas.filter(pessoa => pessoa["idade"] >= 25)
console.log(idade)

let nomes = pessoas.map(pessoa => pessoa["nome"])
console.log(nomes)

let leo = pessoas.find(pessoa => pessoa["nome"] === "Leonardo")
leo.idade = 25
console.log(leo.idade)

let pessoasAtivas = pessoas.map(pessoa => {
    return {
    ...pessoa,
    ativo:true
    }
})
console.log(pessoasAtivas)

let paulistas = pessoas.filter(pessoa => pessoa.cidade === "São Paulo")
console.log(paulistas)