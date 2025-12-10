const a = 10
const b = 20

console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a * b = ", a * b)
console.log("a / b = ", a / b)

console.log("a é menor que b? ", a < b)
console.log("a é igual a b? ", a === b)
console.log("a é diferente de b? ", a !== b)

let chovendo = true
let temGuardaChuva = true

let possoSair = !chovendo || temGuardaChuva
let precisoComprar = chovendo && !temGuardaChuva

console.log(possoSair)
console.log(precisoComprar)