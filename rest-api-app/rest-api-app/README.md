# API de Transferências

## Descrição
API REST em Node.js e Express para login, registro, consulta de usuários e transferências, com regras de negócio e documentação Swagger.

## Instalação

```bash
npm install
```

## Executando o servidor

```bash
node server.js
```

## Endpoints
- `POST /api/register`: Registra usuário (username, password, favorecido)
- `POST /api/login`: Login de usuário
- `GET /api/users`: Lista usuários
- `POST /api/transfer`: Realiza transferência
- `GET /api/transfer/:userId`: Histórico de transferências
- `GET /api-docs`: Documentação Swagger

## Regras de Negócio
- Login exige username e password
- Não é permitido registrar usuários duplicados
- Transferências acima de R$ 5.000,00 só para favorecidos
- Banco de dados em memória

## Testes
Para testes automatizados, importe o `app.js` em seu framework de testes (ex: Supertest).
