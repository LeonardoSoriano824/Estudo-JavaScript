const fs = require("fs")

let pessoa = {nome: "Leonardo", idade: 24, cidade: "Salvador"}
let json = JSON.stringify(pessoa)

fs.writeFileSync("dados.json", json)

let arquivo = fs.readFileSync("dados.json", "utf-8")
let objeto = JSON.parse(arquivo)

console.log(objeto)
