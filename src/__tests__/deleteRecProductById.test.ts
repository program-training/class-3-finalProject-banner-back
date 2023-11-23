import { app } from '../server';
import request from "supertest";

describe('Product Controller', () => {
    test('should remove the banner product successfully', async () => {
        const response = await request(app)
            .delete('/api/recommended/recProducts/:recProductsId')
            .timeout({response: 20000})
            .expect(200)
            
        expect(response.body).toBeDefined();
    })
})


