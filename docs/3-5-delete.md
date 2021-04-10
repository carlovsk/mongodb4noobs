<h1 align="center" id="delete">Delete</h1>

<h2>deleteOne(filter, data)</h2>

O comando `deleteOne(filter)` apaga o documento desejado. Como primeiro parâmetro, devemos passar um objeto como filtro, semelhante ao filtro utilizado nos métodos `find()`.

```
> db.users.deleteOne({"_id": ObjectId("606f980f74ef57c2fec8495e")})
{ "acknowledged" : true, "deletedCount" : 1 }
```

*Obs.* Tente utilizar sempre o `_id` como filtro, para garantir que deletará o item certo.

<h2>deleteMany(filter, data)</h2>

O comando `deleteMany(filter)` apaga os documento desejado. Como primeiro parâmetro, devemos passar um objeto como filtro, semelhante ao filtro utilizado nos métodos `find()`.

```
> db.users.deleteMany({"password": "pswd"})
{ "acknowledged" : true, "deletedCount" : 2 }
```

<br/>

Próximo tópico: <a href="4-primeiro-projeto.md#primeiro-projeto">Primeiro projeto com Node e MongoDB</a>

Voltar para a <a href="../README.md#readme">Home</a>
