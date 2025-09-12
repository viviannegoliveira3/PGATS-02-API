//Bibliotecas

const request = require ('supertest');
const sinon = require ('sinon');
const { expect } = require ('chai');

// Aplicação 
const app = require('../../rest-api-app/rest-api-app/src/app');

//Moch 
const transferService = require ('../../rest-api-app/rest-api-app/src/services/transferService')
// Testes
describe('Transfer Controller', () => {
    describe('POST /api/transfer', () => {
        let processTransferStub;
        beforeEach(() => {
            processTransferStub = sinon.stub(transferService, 'processTransfer').returns({
                id: 1,
                senderId: 1,
                recipientId: 2,
                amount: 100,
                date: new Date()
            });
        });
        afterEach(() => {
            processTransferStub.restore();
        });
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
            const sender = usersRes.body.find(u => u.username === 'Vivianne');
            const recipient = usersRes.body.find(u => u.username === 'Cristiano');
            expect(sender).to.not.be.undefined;
            expect(recipient).to.not.be.undefined;
            // Realiza a transferência
            const resposta = await request(app)
               .post('/api/transfer')
               .send({ senderId: sender.id, recipientId: recipient.id, amount: 100 });
            expect(resposta.status).to.equal(200);
            expect(resposta.body).to.have.property('message', 'Transfer successful');
        });
    });

    describe ('GET/ transfer', () => {
        //its ficam aqui 
    });
});
