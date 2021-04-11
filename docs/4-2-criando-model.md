<h1 id="criando-model">Criando nosso user model</h1>

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


Próximo sub-tópico: <a href="4-3-estabelecendo-rota-create.md#estabelecendo-rota-create">Estabelecendo a rota create</a>

Próximo tópico: <a href="5-conclusao.md#conclusao">Conclusão do curso</a>

Voltar para a <a href="../README.md#readme">Home</a>
