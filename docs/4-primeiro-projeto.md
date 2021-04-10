<h1 align="center" id="primeiro-projeto">Primeiro projeto com Node e MongoDB</h1>

Se você chegou até aqui, é provável que já possui um bom entendimento de como o MongoDB e seus comandos funcionam, então é hora de colocar tudo isso em prática!

<h2>Pré-requisitos de sistema</h2>

- [NodeJS](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Insomnia](https://insomnia.rest/download) (ou outra ferramenta para métodos HTTP que você preferir)

<h2 id="sobre-projeto">Sobre o projeto</h2>

Iremos construir uma simples API de usuários em NodeJS com alguns endpoints utilizando os conceitos de CRUD. Para facilitar um pouco a vida, utilizaremos um pacote do Mongo chamado [Mongoose](https://www.npmjs.com/package/mongoose).

Nesse projeto utilizarei o [Yarn](https://yarnpkg.com/) como gerenciador de pacotes, mas sinta-se livre para utilizar o [NPM](https://www.npmjs.com/).

Todo o código estará disponível nesse mesmo repositório, na pasta `api`, e é **extremamente recomendável que faça seu projeto seguindo o arquivo** [server.js](../api/server.js).

Observe que o foco do projeto será no MongoDB, sua conexão com o Node e a forma em que ambos atuam lado a lado para salvar os dados no banco. Dessa forma, é recomendável que se tenha um conhecimento prévio de construção de APIs com NodeJS e Express, para que não se perca em alguns conceitos que não estão relacionados com o Mongo. Contudo, mesmo sem um conhecimento prévio, ainda será válido fazer o projeto e utilizá-lo como portifólio 😃!

Nesse projeto, utilizaremos os seguintes pacotes:

- [Express](https://www.npmjs.com/package/express)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Nodemon](https://www.npmjs.com/package/nodemon)

<h2 id="iniciando-projeto">Iniciando o projeto</h2>

Primeiramente, crie a pasta do projeto. Dentro dela, rode os seguintes comandos:

```
# inicia o package.json do projeto
$ yarn init


# instalará as dependências que utilizaremos
$ yarn add express mongoose

# instalará o nodemon como dependência de desenvolvimento
$ yarn add --dev nodemon
```

O Nodemon recompila o servidor novamente a cada alteração no código do projeto, evitando muitos erros e facilitando o desenvolvimento.

Agora, crie o arquivo `server.js` na raiz do seu projeto e abra no seu editor de código preferido.

O primeiro passo no nosso projeto será criar a nossa API. Para isso, iremos abrir o `server.js`, importar o `express` e rodar o nosso servidor na porta `3000`.

```
const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.clear();
  console.log('Servidor rodando.');
});
```

Agora, para ver o servidor rodando, abra um terminal na pasta do seu projeto e rode o comando:

```
$ npx nodemon server.js
```

Se tudo ocorrer como planejado, você verá no seu terminal:

<img src="../assets/api/servidor-rodando.png"/>

Agora, estabeleceremos a conexão com o MongoDB. Iremos conectá-lo diretamente na base que utilizaremos, `mongodb4noobs`. Logo abaixo da importação do express na linha 1, adicionaremos as seguintes linhas:

```
const mongoose = require('mongoose');

mongoose
  .connect(`mongodb://localhost:27017/mongodb4noobs`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Conectado no banco de dados.'))
  .catch((err) => console.log(`Rolou algum erro na conexão: ${err}`));
```

Dessa forma, se ocorrer algum erro na conexão, você o verá no console e precisará dar uma debugada para ver o que rolou. Caso contrário, você verá no console o `Conectado no banco de dados`.

<img src="../assets/api/servidor-rodando-e-conectado.png"/>

Agora que tudo está funcionando como deveria, iremos criar o nosso primeiro `model`, para em seguida criarmos as rotas!

<h2 id="criando-model">Criando nosso user model</h2>

Iremos criar o nosso primeiro user model da seguinte forma: utilizando a função `model` do dynamoose, passaremos como primeiro parâmetro o nome da tabela onde serão inseridos os usuários, e em seguida o seu esquema, onde definiremos os atributos do usuário, da seguinte forma:

```
const User = mongoose.model('user', new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },

  user: {
    type: String,
    required: true,
  },

  senha: {
    type: String,
    required: true,
  },
}));
```

Definiremos como atributos apenas o nome, o user e a senha do nosso usuário. Esse model será utilizado para fazer todas as operações no nosso banco de dados.

Agora que o model está criado, podemos estabelecer nossas rotas!

<h2 id="estabelecendo-rotas">Estabelecendo as rotas da nossa API</h2>

Primeiramente, iremos criar uma rota para cadastrar usuários utilizando o método `post`.

Logo abaixo da linha do `app.use(express.json());`, iremos criar a nossa rota que irá receber um objeto JSON contendo o nome, o user e a senha do nosso usuário, e imprimí-los no console:

```
app.use(express.json());

app.post('/users', async (req, res) => {
  const user = req.body;
  console.log(user);

  res.sendStatus(201);
});
```

Agora, envie uma requisição `post` para `http://localhost:3000/users` com o seguinte objeto:

```
{
	"nome": "michael douglas",
	"user": "admin",
	"senha": "pwd"
}
```

E verifique que no seu console se encontrará o user:

<img src="../assets/api/user-post-request.png"/>

Agora, só o que falta é salvar esse usuário, pois estamos apenas imprimindo ele no console. Para salvá-lo, você pode utilizar a função `create` do nosso model, da seguinte forma:

```
app.post('/users', async (req, res) => {
  const user = req.body;

  // criando usuário
  const createdUser = await User.create(user);

  // enviando de volta o usuário criado
  res.status(201).json({ user: createdUser });
});
```

Ao testar no Insomnia, você poderá ver que a nossa API recebeu os dados, salvou no banco e retornou o usuário salvo:

<img src="../assets/api/insomnia-user-created.png"/>

Note que o atributo `_id` não estava no nosso model, mas foi gerado automaticamente pelo MongoDB, de forma que cada usuário terá o seu UUID, e será identificado por ele!

Agora, criaremos duas rotas `get`, uma para achar todos os usuários, e outra para encontrar um usuário em específico passando seu `_id` como parâmetro.

A primeira rota poderá ser facilmente criada utilizando a função `find`, do nosso user model (sim, o mesmo nome da função nativa do Mongo!):

```
app.get('/users', async (req, res) => {
  const users = await User.find();

  res.status(200).json({ users: users });
});
```

Note que, ao enviar um `get` para `http://localhost:3000/users`, você verá nossos usuários listados (provavelmente você criou só um até aqui, mas pode criar mais para ver o efeito dessa função):

<img src="../assets/api/insomnia-users.png"/>

A nossa segunda rota `get` será semelhante a primeira, mas o será passado o id do usuário que queremos na própria url - `http://localhost:3000/users/:id`, dessa forma:

```
app.get('/users/:id', async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);

  res.status(200).json({ user: user });
});
```

E agora, ao enviar a requisição `get` para a API passando o id de um usuário existente, você verá:

<img src="../assets/api/insomnia-user.png"/>



