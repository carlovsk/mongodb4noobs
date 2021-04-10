<h1 align="center" id="preparacao-ambiente">Preparação do ambiente MongoDB</h1>

1. <a href="#windows">Windows</a>
2. <a href="#linux">Linux</a>
3. <a href="#mac">MacOS</a>
4. <a href="#atlas">Rodando na nuvem (MongoDB Atlas)</a>

<h2 id="windows">Windows</h2>

Faça o download do [MongoDB Community Server](https://www.mongodb.com/try/download/community) no site oficial. Escolha o Windows como plataforma, baixe e instale o pacote.

<br/>
<h2 id="linux">Linux</h2>

Para começar, importe a chave GPG pública para a versão estável mais recente do MongoDB com o comando 

```
curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -

# Retornará um OK se a chave for adicionada com sucesso
```

Após isso, execute o comando a seguir, que cria um arquivo no diretório `sources.list.d` chamado `mongodb-org-4.4.list`. O único conteúdo neste arquivo é uma linha contendo `deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse`:

```
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
```

Por fim, atualize o apt e instale o MongoDB:
```
sudo apt update

sudo apt install mongodb-org
```

Para habilitar a inicialização do Mongo junto com o seu sistema, use:

```
sudo systemctl enable mongod
```

Por fim, abra o Mongo no terminal com o comando `mongo`!

<br/>
<h2 id="mac">MacOS</h2>

Para instalar no macOS utilizando o `brew`, rode o seguinte comando:

```
brew install mongodb-community@4.4
```

Essa instalação inclui os seguintes binários:

- The mongod server
- The mongos sharded cluster query router
- The mongo shell

Por fim, abra o Mongo no terminal com o comando `mongo`!

<br/>
<h2 id="atlas">MongoDB Atlas</h2>

Além de todas as instalações anteriores, o Mongo permite que você rode bases de dados na nuvem com o Atlas. Para mais informações de como isso funciona, acesse a [documentação oficial](https://www.mongodb.com/cloud/atlas).

<br/>
Próximo tópico: <a href="3-iniciando-mongo.md#iniciando-mongo">3. Iniciando no MongoDB</a>

Voltar para a <a href="../README.md#readme">Home</a>
