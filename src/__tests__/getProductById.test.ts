import { app } from '../server';
import request from "supertest";

describe('Product Controller', () => {
    test('should get all banners products successfully', async () => {
        const response = await request(app)
            .get('/api/recommended/recProducts/655f1cbbdab13343a8db794c')
            .timeout({response: 20000})
            .expect(200)
            
        expect(response.body).toBeDefined();
    })
})


