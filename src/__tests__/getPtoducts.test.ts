import { app } from '../server';
import request from "supertest";

describe('Product Controller', () => {
    test('should get all products successfully', async () => {
        const response = await request(app)
            .get('/api/recommended/allProducts')
            .timeout({response: 20000})
            .expect(200)
            
        expect(response.body).toBeDefined();
    })
})


