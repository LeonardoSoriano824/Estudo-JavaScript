function esperar() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(50)
        }, 1000)
    })
}

async function executar() {
    let resultado = await esperar()
    resultado = resultado - 10
    resultado = resultado * 2
    console.log(resultado)
}


executar()