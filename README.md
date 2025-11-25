# Projeto de Chamados - API + Front-end (base de estudos)

Este pacote contém:

- **API/**: projeto em .NET 8 com Entity Framework e SQLite para gerenciar chamados.
- **frontend_src/**: código-fonte React + TypeScript (apenas a pasta `src`) com todas as páginas pedidas na prova.

## Como rodar a API

1. Abra o terminal na pasta `API/API` (onde está o `.csproj`).
2. Instale a ferramenta do Entity Framework (caso ainda não tenha):

   ```bash
   dotnet tool install --global dotnet-ef --version 8.0.22
   ```

3. Crie a primeira migration e o banco de dados:

   ```bash
   dotnet ef migrations add Inicial
   dotnet ef database update
   ```

4. Rode a API:

   ```bash
   dotnet run
   ```

   A API usará por padrão a porta `5000` (ajuste as URLs se for diferente).

## Como usar o front-end

1. Crie um novo projeto React com TypeScript:

   ```bash
   npx create-react-app chamados-front --template typescript
   ```

2. Instale o React Router:

   ```bash
   cd chamados-front
   npm install react-router-dom @types/react-router-dom
   ```

3. Apague o conteúdo padrão da pasta `src` criada pelo create-react-app.
4. Copie tudo que está em `frontend_src/src` deste pacote para dentro da `src` do seu projeto.
5. Rode o front-end:

   ```bash
   npm start
   ```

Certifique-se de que a API está rodando (porta 5000) para que as requisições `fetch` funcionem corretamente.
