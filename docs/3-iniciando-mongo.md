<h1 align="center">Iniciando no MongoDB</h1>

Agora que você já tem o Mongo instalando e rodando na sua máquina, você já pode começar a testar os seus comandos básicos. Para isso, apenas abra um terminal e rode o comando `mongo`!

1. <a href="#basic">Básicos MongoDB</a>
2. <a href="#create">Create</a>
3. <a href="#read">Read</a>
4. <a href="#update">Update</a>
5. <a href="#delete">Delete</a>

<h2 id="basic">Básicos MongoDB</h2>

Iremos analizar aqui 6 comandos básicos e utilitários que o Mongo fornece.

<h3>show dbs</h3>

O comando `show dbs` mostra o nome da base de dados atual.

```
> show dbs
admin        0.000GB
config       0.000GB
local        0.000GB
```

<h3>db</h3>

O comando `db` mostra o nome da base de dados atual, a que você está utilizando.

```
> db
nome da base
```

<h3>use db</h3>

O comando `use $db` muda a base que você está utilizando. Observe que o `$db` se refere apenas ao nome na base que você quer usar.

```
> use admin
switched to db admin

> use local
switched to db local
```

Outra coisa interessante é que o comando `use $db` cria uma nova base quando é utilizado para acessar uma base inexistente. Por exemplo:

```
> use baseLoka
switched to db baseLoka
```

A `baseLoka` não existia antes, mas agora foi criada. Porém, ao rodar o comando `show dbs`, você não a verá listada lá, porque **ela ainda não possui dados dentro dela**. Mas não se preocupe, iremos resolver isso nos comandos de <a href="create">create</a>.

<h3>show collections</h3>

O comando `show collections` mostra as collections da base atual.

```
> use admin
switched to db admin

> show collections
system.version
```

<br/>
<h2 id="create">Create</h2>

<h3>insert(data)</h3>

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

<h3>insertOne(data, options)</h3>

O comando `insertOne(data, options)` é semelhante ao comando acima, mas aceita como `data` apenas um objeto simples para criar um item. Aceita também algumas `options` como segundo parâmetro.

```
> db.users.insertOne({"user": "admin1", "password": "pswd"})
{
	"acknowledged" : true,
	"insertedId" : ObjectId("606f980f74ef57c2fec8495e")
}
```

<h3>insertMany(data, options)</h3>

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
<h2 id="read">Read</h2>

<h3>find()</h3>

Aqui, teremos dois exemplos de como se usar o comando `find()`, com e sem parâmetros.

Se você utilizar o comando sem parâmetros, irá retornar todos os items da collection que você utilizar. Em nosso caso, retornará os seguintes dados:

```
> db.users.find()
{ "_id" : ObjectId("606f962e74ef57c2fec8495d"), "user" : "admin", "password" : "pwd" }
{ "_id" : ObjectId("606f980f74ef57c2fec8495e"), "user" : "admin1", "password" : "pswd" }
{ "_id" : ObjectId("606f99ff74ef57c2fec8495f"), "user" : "admin2", "password" : "pswd" }
{ "_id" : ObjectId("606f99ff74ef57c2fec84960"), "user" : "admin3", "password" : "pswd" }
```

**Dica:** para facilitar a visualização dos dados pelo CLI, utilize o `.pretty()` no final de suas queries!

```
> db.users.find().pretty()
{
	"_id" : ObjectId("606f962e74ef57c2fec8495d"),
	"user" : "admin",
	"password" : "pwd"
}
{
	"_id" : ObjectId("606f980f74ef57c2fec8495e"),
	"user" : "admin1",
	"password" : "pswd"
}
{
	"_id" : ObjectId("606f99ff74ef57c2fec8495f"),
	"user" : "admin2",
	"password" : "pswd"
}
{
	"_id" : ObjectId("606f99ff74ef57c2fec84960"),
	"user" : "admin3",
	"password" : "pswd"
}
```

A segunda forma de se utilizar o comando `find(filter)` é passando como parâmetro um objeto com os atributos a serem buscados.

```
> db.users.find({"user": "admin"}).pretty()
{
	"_id" : ObjectId("606f962e74ef57c2fec8495d"),
	"user" : "admin",
	"password" : "pwd"
}

> db.users.find({"password": "pswd"}).pretty()
{
	"_id" : ObjectId("606f980f74ef57c2fec8495e"),
	"user" : "admin1",
	"password" : "pswd"
}
{
	"_id" : ObjectId("606f99ff74ef57c2fec8495f"),
	"user" : "admin2",
	"password" : "pswd"
}
{
	"_id" : ObjectId("606f99ff74ef57c2fec84960"),
	"user" : "admin3",
	"password" : "pswd"
}
```

<h3>findOne(filter)</h3>

Como você já deve imaginar, o comando `findOne(filter)` retorna apenas o primeiro item que for encontrado. Esse comando não aceita o `.pretty()` no final, pois já o faz automaticamente.

```
> db.users.findOne({"password": "pswd"})
{
	"_id" : ObjectId("606f980f74ef57c2fec8495e"),
	"password" : "pswd",
	"user" : "admin1"
}
```

<br/>
<h2 id="update">Update</h2>

<h3>updateOne(filter, data)</h3>

O comando `updateOne(filter, data)` faz a alteração de apenas um documento. Como primeiro parâmetro, devemos passar um objeto como filtro, semelhante ao filtro utilizado nos métodos `find()`. O segundo parâmetro será os dados a serem atualizados. Note que, antes do objeto, você deve usar o operador atômico `$set`, da seguinte forma:

```
> db.users.updateOne({"_id" : ObjectId("606f980f74ef57c2fec8495e")}, {$set: {"password": "nova-senha"}})

{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
```

*Obs.* Tente utilizar sempre o `_id` como filtro, para garantir que atualizará o item certo.

<h3>updateMany(filter, data)</h3>

O comando `updateMany(filter, data)` faz a alteração de vários documentos. Como primeiro parâmetro, devemos passar um objeto como filtro, semelhante ao filtro utilizado nos métodos `find()`. O segundo parâmetro será os dados a serem atualizados. Note que, antes do objeto, você deve usar o operador atômico `$set`, da seguinte forma:

```
> db.users.updateMany({"password": "pswd"}, { $set: {"bday": "01/01/2000"} })
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
```

<h3>replaceOne(filter, data)</h3>

O comando `replaceOne(filter, data)` substitui todo um documento por um novo. Como primeiro parâmetro, devemos passar um objeto como filtro, semelhante ao filtro utilizado nos métodos `find()`. O segundo parâmetro será os dados a serem atualizados. Dessa vez, o operador atômico `$set` não é necessário:

```
> db.users.replaceOne({"_id" : ObjectId("606f980f74ef57c2fec8495e")}, {"password": "nova-senha"})

{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
```

*Obs.* Tente utilizar sempre o `_id` como filtro, para garantir que substituirá o item certo.

<br/>
<h2 id="delete">Delete</h2>

<h3>deleteOne(filter, data)</h3>

O comando `deleteOne(filter)` apaga o documento desejado. Como primeiro parâmetro, devemos passar um objeto como filtro, semelhante ao filtro utilizado nos métodos `find()`.

```
> db.users.deleteOne({"_id": ObjectId("606f980f74ef57c2fec8495e")})

{ "acknowledged" : true, "deletedCount" : 1 }
```

*Obs.* Tente utilizar sempre o `_id` como filtro, para garantir que deletará o item certo.

<h3>deleteMany(filter, data)</h3>

O comando `deleteMany(filter)` apaga os documento desejado. Como primeiro parâmetro, devemos passar um objeto como filtro, semelhante ao filtro utilizado nos métodos `find()`.

```
> db.users.deleteMany({"password": "pswd"})

{ "acknowledged" : true, "deletedCount" : 2 }
```

