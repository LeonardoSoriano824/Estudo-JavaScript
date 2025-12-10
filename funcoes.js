let dizerHora = (hora) => {
    if (hora >= 5 && hora <= 11) return "Bom dia!"
    if (hora >= 12 && hora <= 17) return "Boa tarde!"
    if (hora >= 18 && hora <= 23) return "Boa noite!"
    return "Madrugada"
}

let somar = (a, b) => a + b

let podeEntrar = (idade) => idade >= 18

let verificarPar = (numero) => numero % 2 === 0

console.log(dizerHora(18))
console.log(somar(10, 20))
console.log(podeEntrar(13))
console.log(verificarPar(2))

