<h1 align="center" id="basic">Comandos Básicos do MongoDB</h1>

Iremos analizar aqui 6 comandos básicos e utilitários que o Mongo fornece.

<h2>show dbs</h2>

O comando `show dbs` mostra o nome da base de dados atual.

```
> show dbs
admin        0.000GB
config       0.000GB
local        0.000GB
```

<h2>db</h2>

O comando `db` mostra o nome da base de dados atual, a que você está utilizando.

```
> db
nome da base
```

<h2>use db</h2>

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

A `baseLoka` não existia antes, mas agora foi criada. Porém, ao rodar o comando `show dbs`, você não a verá listada lá, porque **ela ainda não possui dados dentro dela**. Mas não se preocupe, iremos resolver isso nos comandos de <a href="3-2-create.md#create">create</a>.

<h2>show collections</h2>

O comando `show collections` mostra as collections da base atual.

```
> use admin
switched to db admin

> show collections
system.version
```

<br/>

Próximo sub-tópico: <a href="3-2-create.md#create">Comandos Create</a>

Próximo tópico: <a href="4-primeiro-projeto.md#primeiro-projeto">Primeiro projeto com Node e MongoDB</a>

Voltar para a <a href="../README.md#readme">Home</a>
