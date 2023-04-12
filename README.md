# Entendendo Promises, Sincronismo e Assincronismo  em Javascript

Este repositório foi desenvolvido com o objetivo de ajudar pessoas que estão aprendendo JavaScript. 

## 🚀 O que é uma Promise?

Uma promise é um objeto que representa o sucesso ou falha de uma operação assincrona.  Basicamente, é uma maneira de lidar com ações que podem demorar para serem executadas, como solicitações de rede, processamento de arquivos ou chamadas a bancos de dados.

Uma Promise possui três estados:

- **pending** (pendente), que é o estado inicial;
- **fulfilled** (concluída com sucesso), quando a operação é concluída com sucesso;
- **rejected** (rejeitada), quando a operação falha por algum motivo.

Ao criar uma Promise em JavaScript, você pode definir o que acontecerá quando a operação for bem-sucedida ou falhar, utilizando os métodos **.then()** e **.catch()**, porém, como foi dito acima, a **promise é um objeto que representa o sucesso ou falha de uma operação assincrona**, mas o que é uma operação assincrona e sincrona?

## 📋 Operação Sincrona em Javascript

Uma operação síncrona é executada de forma sequencial, passo a passo, uma tarefa após a outra.

É como uma fila em um supermercado, onde as pessoas esperam sua vez para serem atendidas pelo caixa em uma ordem específica, onde uma pessoa é atendida de cada vez. 

O código síncrono executa uma tarefa de cada vez, antes de passar para a próxima tarefa. Embora seja fácil de entender, o código síncrono pode ficar lento se houver muitas tarefas ou se alguma tarefa demorar muito.



<p align="center">
 <h4> Operação feita de forma Sincrona </h4>
<img src="https://i.ibb.co/sy6QHTM/2206-w048-n005-168b-p1-168.jpg"/>
</p>
<center> Cada paciente é atendimento por ordem de chegada, do primeiro para o ultimo, se fosse um código javascript seria executado de cima para baixo. </center>


## 📋 Operação Assíncrona em Javascript

Uma operação assíncrona é aquela em que o programa pode continuar executando outras tarefas enquanto aguarda uma resposta. Um exemplo comum é fazer uma solicitação para uma API e aguardar a resposta. 

Enquanto o programa aguarda a resposta da API, outras ações podem ser realizadas, tornando a experiência do usuário mais fluida e sem interrupções desnecessárias.

Um exemplo prático de operação assíncrona é o processo de preparação do pedido em um restaurante. Depois que o cliente faz o pedido, o funcionário leva o pedido para a cozinha, onde será preparado. Enquanto o cozinheiro está preparando o pedido, o cliente pode continuar conversando com sua família ou olhando o cardápio. Quando o pedido estiver pronto, o funcionário irá entregá-lo à mesa do cliente.

<p align="center">
 <h4> Operação feita de forma Asincrona </h4>
<img src="https://i.ibb.co/5jrpx37/5083234-2668461.jpg"/>
</p>


## ⚙️ Agora que entendemos um pouco sobre Promises,Operações sincronas e assincronas Vamos sair um pouco da teoria!

### Promise:


<p align="center">
  <h4>Exemplo de uma Promise em Javascript</h4>
<img src="https://i.ibb.co/G9rBpf8/carbon-3.png"/>
</p>

- Quando você cria uma Promise, você pode usar resolve para retornar um valor caso a operação assíncrona seja bem-sucedida, como por exemplo o resultado de uma requisição em uma API.
- você pode usar reject para retornar uma mensagem de erro caso a operação assíncrona falhe, como por exemplo se a requisição em uma API não for bem-sucedida.
-  Em resumo, **resolve()** é usado para retornar um valor bem-sucedido e **reject()** é usado para retornar um erro. 



#### Código síncrono: 
<p align="center">
  <h4>Exemplo de código síncrono em Javascript</h4>
<img src="https://i.ibb.co/t44qrGM/carbon.png"/>
</p>
<p>Nesse exemplo, as funções são executadas uma de cada vez, seguindo uma ordem específica. A primeira função é executada antes da segunda, porque o código é escrito de cima para baixo seguindo a ideia de código sincrono.</p>

#### Código Assíncrono: 
<p align="center">
  <h4>Exemplo de código Assíncrono em Javascript:</h4>
<img src="https://i.ibb.co/5228v2C/carbon-1.png"/>
</p>
<p>O exemplo acima usa o método fetch para fazer uma requisição HTTP para a API da Speedio, passando o CNPJ como parâmetro de consulta. Em seguida, duas chamadas encadeadas do método .then() são usadas para tratar a resposta da requisição. <br> <br>
O método fetch é, na verdade, uma função assíncrona que retorna uma Promise. As chamadas encadeadas .then() que vemos no código são usadas para lidar com o resultado dessa Promise.
</p>


## 😁 Canais que recomendo para aprender 

| Canal | Conteudo | Link | Tempo |
|-------|--------------|------|-------|
| Roger Melo | Não sabe o que são promises?  | [Link](https://www.youtube.com/watch?v=S8qfn_XQT-A) | 18:57 |
| Roger Melo | 2 passos fundamentais para você entender promises | [Link](https://www.youtube.com/watch?v=y6HSxH0FIWM) | 04:32 |
| Roger Melo | Como criar e consumir uma promise | [Link](https://www.youtube.com/watch?v=kWmiHftLiVM) | 5:45 |
| Roger Melo | O que é código assíncrono | [Link](https://www.youtube.com/watch?v=tVYTqsqZHZY) | 4:34 |
| Matheus Battisti - Hora de Codar | Aprenda tudo sobre Promises de JavaScript | [Link](https://www.youtube.com/watch?v=87gWRVGRZ5o) | 23:22 |
| Código Fonte TV | Desvendando DEFINITIVAMENTE as Promises em JavaScript  | [Link](https://www.youtube.com/watch?v=nRJhc6vXyK4) | 16:08 |




## 🎁 Expressões de gratidão

* Roger Melo;
* Código Fonte TV;
* Matheus Battisti - Hora de Codar;


⌨️ com ❤️ por [Fernando Silva de Jesus](https://github.com/fernandosilvajesus/) 😊

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>
