//criando uma Promise
const getData = () => {

    //retornando uma Promise
        return new Promise((resolve, reject) => {
            //resolve('DADOS AQUI')
            reject("DADOS NÃO OBTIDOS PROMISE REJEITADA")
        })
    }
    
    
    //para consumir uma promise é necessario o método then ele é responsavel por receber a resposta de sucesso da promise.
    getData()
        .then((value) => { //Quando a promise é resolvida.
            console.log(value)
        })
        .catch((error => {  //catch é responsavel por receber o valor de uma promise não resolvida assim podemos tratar erros.
            console.log(error) //quando a promise é rejeitada.
        }))