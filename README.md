# Express Template

Template express que utiliza a Arquitetura MVC.

## Módulos
### Os módulos principais são:
  - Controllers e Routes **(Express)**
  - Databases/Models **(Sequelize)**
  - Views **(Pug)**

## Comandos

**Sequelize:** Utilitário de linha de comando para gerenciamento do banco de dados
```bash
$ yarn sequelize
```

**Yarn:** Gerenciador de pacotes alternativo ao npm
```bash
$ yarn 
```

## Rodando o projeto na sua máquina
Para iniciar o servidor é necessário seguir os passos

### 1 - Configurando o banco de dados
```bash
# cria o banco de dados
yarn sequelize db:create

# roda as migrações
yarn sequelize db:migrate
```
### 2 - Rodar o comando para subir o servidor 
Modo de desenvolvimento
```bash
$ yarn dev
```
Ou em produção
```bash
$ yarn start
```

E acesse http://localhost:3000 no navegador
