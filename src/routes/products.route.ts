import { Router } from 'express';

import productsController from '../controllers/products.controller';

const router = Router();

router.post('/', productsController.create);

export default router;