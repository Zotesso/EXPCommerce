import { Request, Response } from 'express';
import knex from '../database/connection';

class ProductController {
    async index (request: Request, response: Response) {
        const products = await knex('products').select('*').limit(4);
        
        const serializedProducts = products.map(product => { 
            return {
                id: product.id,
                title: product.title,
                description: product.description,
                price: product.price,
                image_url: 'https://picsum.photos/100/100',
            };
        });
    
        return response.json(serializedProducts);
    }
}

export default ProductController