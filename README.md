# Entendendo Promises, Sincronismo e Assincronismo  em Javascript

Um parágrafo da descrição do projeto vai aqui

## 🚀 O que é uma Promise?

Uma promise é um objeto que representa o sucesso ou falha de uma operação assincrona.  Basicamente, é uma maneira de lidar com ações que podem demorar para serem executadas, como solicitações de rede, processamento de arquivos ou chamadas a bancos de dados.

Uma Promise possui três estados:

- **pending** (pendente), que é o estado inicial;
- **fulfilled** (concluída com sucesso), quando a operação é concluída com sucesso;
- **rejected** (rejeitada), quando a operação falha por algum motivo.

Ao criar uma Promise em JavaScript, você pode definir o que acontecerá quando a operação for bem-sucedida ou falhar, utilizando os métodos **.then()** e **.catch()**, porém, como foi dito acima, a **promise é um objeto que representa o sucesso ou falha de uma operação assincrona**, mas o que é uma operação assincrona e sincrona?

## Operação Sincrona em Javascript

Uma operação síncrona é executada de forma sequencial, passo a passo, uma tarefa após a outra.

É como uma fila em um supermercado, onde as pessoas esperam sua vez para serem atendidas pelo caixa em uma ordem específica, onde uma pessoa é atendida de cada vez. 

O código síncrono executa uma tarefa de cada vez, antes de passar para a próxima tarefa. Embora seja fácil de entender, o código síncrono pode ficar lento se houver muitas tarefas ou se alguma tarefa demorar muito.



<p align="center">
<img src="https://i.ibb.co/sy6QHTM/2206-w048-n005-168b-p1-168.jpg"/>
</p>

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>
