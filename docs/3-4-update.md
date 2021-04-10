
<h1 align="center" id="update">Update</h1>

<h2>updateOne(filter, data)</h2>

O comando `updateOne(filter, data)` faz a alteração de apenas um documento. Como primeiro parâmetro, devemos passar um objeto como filtro, semelhante ao filtro utilizado nos métodos `find()`. O segundo parâmetro será os dados a serem atualizados. Note que, antes do objeto, você deve usar o operador atômico `$set`, da seguinte forma:

```
> db.users.updateOne({"_id" : ObjectId("606f980f74ef57c2fec8495e")}, {$set: {"password": "nova-senha"}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
```

*Obs.* Tente utilizar sempre o `_id` como filtro, para garantir que atualizará o item certo.

<h2>updateMany(filter, data)</h2>

O comando `updateMany(filter, data)` faz a alteração de vários documentos. Como primeiro parâmetro, devemos passar um objeto como filtro, semelhante ao filtro utilizado nos métodos `find()`. O segundo parâmetro será os dados a serem atualizados. Note que, antes do objeto, você deve usar o operador atômico `$set`, da seguinte forma:

```
> db.users.updateMany({"password": "pswd"}, { $set: {"bday": "01/01/2000"} })
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
```

<h2>replaceOne(filter, data)</h2>

O comando `replaceOne(filter, data)` substitui todo um documento por um novo. Como primeiro parâmetro, devemos passar um objeto como filtro, semelhante ao filtro utilizado nos métodos `find()`. O segundo parâmetro será os dados a serem atualizados. Dessa vez, o operador atômico `$set` não é necessário:

```
> db.users.replaceOne({"_id" : ObjectId("606f980f74ef57c2fec8495e")}, {"password": "nova-senha"})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
```

*Obs.* Tente utilizar sempre o `_id` como filtro, para garantir que substituirá o item certo.

<br/>

Próximo sub-tópico: <a href="3-5-delete.md#delete">Comandos Delete</a>

Próximo tópico: <a href="4-primeiro-projeto.md#primeiro-projeto">Primeiro projeto com Node e MongoDB</a>

Voltar para a <a href="../README.md#readme">Home</a>
