// tests/controllers/client.controller.test.js
const request = require('supertest');
const app = require('../../app'); // Assuming you have an Express app instance
const { sequelize } = require('../../config/database');
const Client = require('../../models/client.model');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});

describe('Client Controller', () => {
    let client;

    beforeEach(async () => {
        client = await Client.create({
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '1234567890',
            company: 'Example Inc.',
            country: 'USA'
        });
    });

    afterEach(async () => {
        await Client.destroy({ where: {} });
    });

    it('creates a new client', async () => {
        const res = await request(app)
            .post('/clients')
            .send({
                id: 2,
                name: 'Jane Doe',
                email: 'jane.doe@example.com',
                phone: '0987654321',
                company: 'Example Inc.',
                country: 'USA'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id', 2);
    });

    it('gets all clients', async () => {
        const res = await request(app).get('/clients');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('gets a client by ID', async () => {
        const res = await request(app).get(`/clients/${client.id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id', client.id);
    });

    it('returns 404 if client not found', async () => {
        const res = await request(app).get('/clients/999');
        expect(res.statusCode).toEqual(404);
    });

    it('updates a client', async () => {
        const res = await request(app)
            .put(`/clients/${client.id}`)
            .send({
                name: 'John Smith',
                email: 'john.smith@example.com',
                phone: '1234567890',
                company: 'Example Inc.',
                country: 'USA'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name', 'John Smith');
    });

    it('returns 404 if updating a non-existent client', async () => {
        const res = await request(app)
            .put('/clients/999')
            .send({
                name: 'John Smith',
                email: 'john.smith@example.com',
                phone: '1234567890',
                company: 'Example Inc.',
                country: 'USA'
            });
        expect(res.statusCode).toEqual(404);
    });

    it('deletes a client', async () => {
        const res = await request(app).delete(`/clients/${client.id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Cliente eliminato con successo');
    });

    it('returns 404 if deleting a non-existent client', async () => {
        const res = await request(app).delete('/clients/999');
        expect(res.statusCode).toEqual(404);
    });
});