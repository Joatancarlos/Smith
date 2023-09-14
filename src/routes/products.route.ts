import { Router } from 'express';

import productsController from '../controllers/products.controller';
import { nameValidation, priceValidation } from '../middlewares/productsValidations.middlewares';

const router = Router();

router.post('/', nameValidation, priceValidation, productsController.create);
router.get('/', productsController.getAll);

export default router;