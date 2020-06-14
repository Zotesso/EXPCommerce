import { Router } from 'express';

import ProductController from './controllers/ProductController';

const routes = Router();

const productController = new ProductController();

routes.get('/products', productController.index);

export default routes;