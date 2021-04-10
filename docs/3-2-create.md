<h1 align="center" id="create">Comandos Create</h1>

<h2>insert(data)</h2>

O comando `insert(data)` insere dados na sua base. Esse comando aceita como `data` a ser inserido um objeto JSON ou uma array de objetos. A partir de agora, criaremos uma base de usuários nova para praticarmos os comandos de CRUD.

```
> use users
switched to db users

> db.users.insert({"user": "admin", "password": "pwd"});
WriteResult({ "nInserted" : 1 })
```

Agora você fez o seu primeiro insert no Mongo! E note que, ao rodar o `show dbs`, agora você verá lá a sua base `users`!

```
> show dbs
admin        0.000GB
config       0.000GB
local        0.000GB
users        0.000GB
```

<h2>insertOne(data, options)</h2>

O comando `insertOne(data, options)` é semelhante ao comando acima, mas aceita como `data` apenas um objeto simples para criar um item. Aceita também algumas `options` como segundo parâmetro.

```
> db.users.insertOne({"user": "admin1", "password": "pswd"})
{
	"acknowledged" : true,
	"insertedId" : ObjectId("606f980f74ef57c2fec8495e")
}
```

<h2>insertMany(data, options)</h2>

O comando `insertMany(data, options)` é semelhante ao primeiro comando, mas, diferente do `insertOne(data, options)`, este aceita como `data` apenas uma array de objetos para se criar vários de uma vez. Aceita também algumas `options` como segundo parâmetro.

```
> db.users.insertMany([{"user": "admin2", "password": "pswd"}, {"user": "admin3", "password": "pswd"}])
{
	"acknowledged" : true,
	"insertedIds" : [
		ObjectId("606f99ff74ef57c2fec8495f"),
		ObjectId("606f99ff74ef57c2fec84960")
	]
}
```

<br/>

Próximo sub-tópico: <a href="3-3-read.md#read">Comandos Read</a>

Próximo tópico: <a href="4-primeiro-projeto.md#primeiro-projeto">Primeiro projeto com Node e MongoDB</a>

Voltar para a <a href="../README.md#readme">Home</a>
