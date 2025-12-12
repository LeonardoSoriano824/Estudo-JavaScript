let usuario = {nome: "Leonardo", idade: 24, cidade: "Salvador"}
let json = JSON.stringify(usuario)

console.log(json)

let objeto = JSON.parse(json)

console.log(objeto)


