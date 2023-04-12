const consultarCep = () =>{
    const url = `https://viacep.com.br/ws/01001000/json/`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        for(item in data){
            console.log(`${item}: ${data[item]}`)
        }
    })
}


consultarCep()