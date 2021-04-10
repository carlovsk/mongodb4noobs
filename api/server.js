const express = require('express');
const mongoose = require('mongoose');

// Conexão com o banco de dados
mongoose
  .connect(`mongodb://localhost:27017/mongodb4noobs`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Conectado no banco de dados.'))
  .catch((err) => console.log(`Rolou algum erro na conexão: ${err}`));

// Criação do User model
const User = mongoose.model(
  'user',
  new mongoose.Schema({
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
  })
);

// Criando a API
const app = express();
app.use(express.json());

// Estabelecendo rotas
// Create
app.post('/users', async (req, res) => {
  const user = req.body;

  const createdUser = await User.create(user);

  res.status(201).json({ user: createdUser });
});

// Read
app.get('/users', async (req, res) => {
  const users = await User.find();

  res.status(200).json({ users: users });
});

app.get('/users/:id', async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);

  res.status(200).json({ user: user });
});

// Update
app.put('/users/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const user = await User.findByIdAndUpdate(id, body);

  res.status(200).json({ user: user });
});

// Delete
app.delete('/users/:id', async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);

  res.status(200).json({ user: user });
});

// Rodando a API na porta :3000
app.listen(3000, () => {
  console.clear();
  console.log('Servidor rodando.');
});
