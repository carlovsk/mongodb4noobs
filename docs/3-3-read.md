<h1 align="center" id="read">Comandos Read</h1>

<h2>find()</h2>

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

<h2>findOne(filter)</h2>

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

Próximo sub-tópico: <a href="3-4-update.md#update">Comandos Update</a>

Próximo tópico: <a href="4-primeiro-projeto.md#primeiro-projeto">Primeiro projeto com Node e MongoDB</a>

Voltar para a <a href="../README.md#readme">Home</a>
