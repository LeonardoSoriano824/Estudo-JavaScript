let promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Usuario encontrado!")
    }, 2000)
})

promessa.then(resposta => {
    console.log(resposta)
})