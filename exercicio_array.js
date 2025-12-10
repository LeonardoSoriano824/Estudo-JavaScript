let cursos = ["Cs50 Harvard", "Sistemas de Informação", "Dev Fullstack com IA", "Pianoforall"]

console.log(cursos[0])
console.log(cursos[3])

for (let curso of cursos) {
    console.log(curso)
}

cursos.push("JavaScript Backend")
cursos.unshift("Git & GitHub")
cursos.shift()
cursos.pop()

console.log(cursos)

let resultado = cursos.find(curso => curso === "Pianoforall")
console.log(resultado)

let longos = cursos.filter(curso => curso.length > 12)
console.log(longos)

let maiusculo = cursos.map(curso => curso.toUpperCase())
console.log(maiusculo)