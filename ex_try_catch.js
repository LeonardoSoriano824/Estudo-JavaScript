function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve("Usuário encontrado")
            }
            else {
                reject("Usuário não encontrado")
            }
        }, 1000);
    })
}

async function executar() { 
    try {
        let resultado = await buscarUsuario(2)
        console.log(resultado)
    } catch (erro) {
        console.log("Erro", erro)
    }
}

executar()