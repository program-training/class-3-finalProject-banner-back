import { app } from '../server';
import request from "supertest";

describe('Product Controller', () => {
    test('should get banner product by id successfully', async () => {
        const response = await request(app)
            .get('/api/recommended/recProducts/:recProductId')
            .timeout({response: 20000})
            .expect(200)
            
        expect(response.body).toBeDefined();
    })
})


