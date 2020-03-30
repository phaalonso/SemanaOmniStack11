const request = require('supertest');
const app = require('../../src/App');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: 'Bisteca',
                email: 'phaalonso@gmail.com.br',
                whatsapp: '18988004078',
                city: 'Rio do Sul',
                uf: 'SC'
            });
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
})