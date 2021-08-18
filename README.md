# 🏭 API Rest para cadastro de empresas 
API desenvolvida para o cadastro, listagem, exclução e edição de empresas em um banco de dados.

## 💻 Tecnologias utilizadas
* Docker - para a criação de ambiente
* Postgres como banco de dados
* Node.js
* Express
* Axios

## 🚀 Instalando projeto

```
git clone https://github.com/casemiroj/companyCrud-api.git
```
Instale as dependencias do projeto com
```
npm install
```

ou

```
yarn add
```

## 🔥 Utilizando projeto
Suba o servidor com
```
yarn start
```

# 📌 Endpoints
## Cadastrar empresa
```
http://localhost:300/companies  | Método POST
```

## Listar empresas cadastradas
```
http://localhost:300/companies  | Método GET
```

## Listar empresa cadastrada
```
http://localhost:300/companies/{cnpj}  | Método GET
```

## Editar empresa
```
http://localhost:300/companies/{cnpj}  | Método PUT
```

## Excluir empresa
```
http://localhost:300/companies/{cnpj}  | Método DELETE
```