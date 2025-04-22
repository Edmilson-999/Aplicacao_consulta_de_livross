
# API de Gestão de Livros e Autores

Node.js 14.x+
Express 4.x
Sequelize 6.x
Swagger 3.0

API RESTful desenvolvida com **Node.js**, **Express** e **Sequelize** para gerenciamento de livros e autores.

---

##  Funcionalidades

###  Gestão de Livros
- Criar livros
- Listagem de todos os livros
- Busca de livros por título
- Associação de livros a autores

###  Gestão de Autores
- Criar autores
- Listagem de autores
- Busca e atualização de autores

###  Relacionamentos
- Um autor pode ter vários livros
- Cada livro pertence a um autor

---

##  Como Começar

###  Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn
- Banco de dados: **MySQL**, **PostgreSQL** ou **SQLite**

###  Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/api-livros-autores.git
   cd api-livros-autores
   ```

2. **Instale as dependências**
   ```bash
   npm ins
   npm install express
   ```

3. **Configure o banco de dados**
   - Crie um arquivo `.env` baseado no `.env.example`
   - Preencha as variáveis de conexão com seu banco

4. **Execute as migrações**
   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Inicie o servidor**
   ```bash
   npm start
   ```

---

##  Endpoints

A documentação da API está disponível via **Swagger**:

Acesse: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

###  Rotas Principais

| Método | Endpoint               | Descrição                      |
|--------|------------------------|-------------------------------|
| GET    | `/authors`             | Lista todos os autores        |
| POST   | `/authors`             | Cria um novo autor            |
| GET    | `/authors/{id}`        | Obtém um autor específico     |
| GET    | `/books`               | Lista todos os livros         |
| POST   | `/books`               | Cria um novo livro            |
| GET    | `/books/search?title=` | Busca livros por título       |

---

##  Estrutura do Projeto

```
api-livros-autores/
├── Config/
│   └── database.js         # Configuração do banco de dados
├── Controllers/
│   ├── authorController.js
│   └── bookController.js
├── Models/
│   ├── Author.js
│   └── Book.js
├── Moutes/
│   ├── authorRoutes.js	
│   └── bookRoutes.js
├── .env.example            # Exemplo de variáveis de ambiente
├── app.js                  # Arquivo principal da aplicação
└── package.json
```

---

## 🧪 Documentação Interativa

A documentação Swagger UI permite:
- Visualizar os endpoints disponíveis
- Ver exemplos de requisições e respostas
- Testar a API diretamente na interface

Acesse: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

##  Solução de Problemas

### Erros comuns

- `SequelizeConnectionError`: Verifique se o banco de dados está ativo e as credenciais estão corretas.
- `Model not defined`: Confirme se os modelos foram importados corretamente.

### Checklist

1. Banco de dados está em execução?
2. `.env` está corretamente configurado?
3. Conexão com o banco foi testada manualmente?

---

##  Contribuindo

Contribuições são muito bem-vindas! Para colaborar:

1. Faça um fork do projeto
2. Crie uma nova branch:
   ```bash
   git checkout -b feature/NovaFuncionalidade
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. Envie para seu fork:
   ```bash
   git push origin feature/NovaFuncionalidade
   ```
5. Abra um Pull Request

---

##  Licença

Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---


**Edmilson Alves**  


