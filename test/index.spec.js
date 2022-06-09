import app from "../src/app"
import request from "supertest"


describe('GET /tasks', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/tasksArray').send();
        expect(response.statusCode).toBe(200);
    });

    test('should respond with array', async () => {
        const response = await request(app).get('/tasksArray').send();
        expect(response.body).toBeInstanceOf(Array);
    })

    test('should respond with Object', async () => {
        const response = await request(app).get('/tasksObject').send();
        expect(response.body).toBeInstanceOf(Object);
    })
});

describe('POST /tasks', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).post('/tasks').send();
        expect(response.statusCode).toBe(200);
    });

    test('should have a content-type: application/json in header', async () => {
        const response = await request(app).post('/tasks').send();
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
    });

    test('should respond with an tasksJsonBody ID', async () => {
        const response = await request(app).post('/tasksJsonBody').send({
            title: "test tasksJsonBody",
            description: "test description"
        });
        expect(response.body.id).toBeDefined();
    });
});

//test for fail with empty request
describe('POST /tasksJsonBodyEmpty', () => {
    test('should respond with a 400 status code', async () => {
        const response = await request(app).post('/tasksJsonBodyEmpty').send({});
        expect(response.statusCode).toBe(400);
    });
});  