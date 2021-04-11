<h1 align="center" id="primeiro-projeto">Primeiro projeto com Node e MongoDB</h1>

Se você chegou até aqui, é provável que já possui um bom entendimento de como o MongoDB e seus comandos funcionam, então é hora de colocar tudo isso em prática!

<h2 id="sobre-projeto">Sobre o projeto</h2>

Iremos construir uma simples API de usuários em NodeJS com alguns endpoints utilizando os conceitos de CRUD. Para facilitar um pouco a vida, utilizaremos um pacote do Mongo chamado [Mongoose](https://www.npmjs.com/package/mongoose).

Nesse projeto utilizarei o [Yarn](https://yarnpkg.com/) como gerenciador de pacotes, mas sinta-se livre para utilizar o [NPM](https://www.npmjs.com/).

Todo o código estará disponível nesse mesmo repositório, na pasta `api`, e é **extremamente recomendável que faça seu projeto seguindo o arquivo** [server.js](../api/server.js).

Observe que o foco do projeto será no MongoDB, sua conexão com o Node e a forma em que ambos atuam lado a lado para salvar os dados no banco. Dessa forma, é recomendável que se tenha um conhecimento prévio de construção de APIs com NodeJS e Express, para que não se perca em alguns conceitos que não estão relacionados com o Mongo. Contudo, mesmo sem um conhecimento prévio, ainda será válido fazer o projeto e utilizá-lo como portifólio 😃!

Nesse projeto, utilizaremos os seguintes pacotes:

- [Express](https://www.npmjs.com/package/express)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Nodemon](https://www.npmjs.com/package/nodemon)

<h2>Pré-requisitos de sistema</h2>

- [NodeJS](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Insomnia](https://insomnia.rest/download) (ou outra ferramenta para métodos HTTP que você preferir)

<h2>Roadmap do projeto</h2>

1. <a href="4-1-iniciando-projeto.md#iniciando-projeto">Iniciando o projeto</a>
2. <a href="4-2-criando-model.md#criando-model">Criando o primeira model</a>
3. <a href="4-3-estabelecendo-rota-create.md#estabelecendo-rota-create">Estabelecendo a rota create</a>
4. <a href="4-4-estabelecendo-rota-read.md#estabelecendo-rota-read">Estabelecendo as rotas read</a>
5. <a href="4-5-estabelecendo-rota-update.md#estabelecendo-rota-update">Estabelecendo a rota update</a>
6. <a href="4-6-estabelecendo-rota-delete.md#estabelecendo-rota-delete">Estabelecendo a rota delete</a>


Próximo sub-tópico: <a href="4-1-iniciando-projeto.md#iniciando-projeto">Iniciando o projeto</a>

Próximo tópico: <a href="5-conclusao.md#conclusao">Conclusão do curso</a>

Voltar para a <a href="../README.md#readme">Home</a>
