/*
 o fetch utiliza Promises por debaixo dos panos. 
 Isso significa que ele usa o modelo de programação assíncrono baseado em Promises para lidar com a resposta da requisição e permitir que o código continue
  a executar outras tarefas enquanto aguarda a resposta da requisição. 
 */


const consultarCNPJ = ()=>{
    const url = `https://api-publica.speedio.com.br/buscarcnpj?cnpj=00000000000191`
    fetch(url) //fazendo a requisição na api
    .then(response => response.json()) //Usando o método then() da Promise retornada pelo fetch para extrair os dados da resposta em formato JSON.
    .then(empresa => { //ele encadeando outro método then() para manipular esses dados e imprimir no console  o objeto empresa
        console.log(empresa)
    }) 

}

consultarCNPJ()


