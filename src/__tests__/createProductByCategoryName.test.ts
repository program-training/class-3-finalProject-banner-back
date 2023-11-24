import { app } from '../server';
import request from "supertest";

describe('Product Controller By Name', () => {
    test('should get products by name successfully', async () => {
        const newProduct = {
          "name": "iphone",
          "salePrice": 500,
          "quantity": 10,
          "description": "this is a new phone",
          "category": "electronic",
          "discountPercentage": 100,
          "image": {
            "url": "https://publicdomainvectors.org/photos/landline-phone-publicdomain.jpg",
            "alt": "phone" 
          },
          "createdAt": "23.11.2023",
          "author": "zevBem"
        }
        const response = await request(app)
            .post('/api/recommended/:categoryName')
            .send(newProduct)
            .timeout({response: 20000})
            .expect(200)
            const {product} = response.body
        expect( response.body ).toBeDefined
        expect( response.body.product).toEqual(newProduct)
    })
})
