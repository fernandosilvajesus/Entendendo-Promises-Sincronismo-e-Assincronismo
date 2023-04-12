// Define a variável randomNumber e atribui a ela o valor 9
let randomNumber = 9;

// Aguarda 2 segundos (2000 milissegundos) e, em seguida, executa a função passada como argumento
// Neste caso, a função adiciona 100 ao valor de randomNumber e exibe o resultado no console
setTimeout(() => {
    randomNumber += 100;
    console.log(randomNumber)
}, 2000)

// Exibe o valor atual de randomNumber no console (que é 9 neste momento)
console.log(randomNumber)



// setTimeout é executado na linha 6, ele não bloqueia a execução das próximas linhas de código. Em vez disso, ele registra uma função que será executada após o tempo especificado de 2 segundos ter passado.
// Isso significa que, após a execução da linha 6, o JavaScript continuará executando as próximas linhas de código imediatamente, sem esperar pelos 2 segundos. Assim, a linha 12 que exibe o valor atual de randomNumber é executada antes da operação registrada pelo setTimeout.
// Por isso, o valor inicial de randomNumber (9) é exibido primeiro, seguido pelo valor atualizado (109) após 2 segundos, quando a operação registrada pelo setTimeout finalmente é executada.