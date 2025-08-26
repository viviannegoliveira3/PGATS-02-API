//Bibliotecas

const request = require ('supertest');
const sinon = require ('sinon');
const { expect } = require ('chai');

// Aplicação 
const app = require('../../rest-api-app/rest-api-app/src/app');
// Testes
describe('Transfer Controller', () => {
    describe('POST /api/transfer', () => {
        it('Quando uso dados válidos o retorno será 200', async () => {
            // Primeiro, registre dois usuários
            await request(app)
                .post('/api/register')
                .send({ username: 'Vivianne', password: '123', favorecido: true });
            await request(app)
                .post('/api/register')
                .send({ username: 'Cristiano', password: '123', favorecido: false });
            // Busca os usuários para pegar os IDs
            const usersRes = await request(app).get('/api/users');
            const sender = usersRes.body.find(u => u.username === 'sender');
            const recipient = usersRes.body.find(u => u.username === 'recipient');
            // Realiza a transferência
            const resposta = await request(app)
               .post('/api/transfer')
               .send({ senderId: 1, recipientId: 1, amount: 100 });
            expect(resposta.status).to.equal(200);
            expect(resposta.body).to.have.property('message', 'Transfer successful');
        });
    });

    describe ('GET/ transfer', () => {
        //its ficam aqui 
    });
});
