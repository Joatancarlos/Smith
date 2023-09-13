import { Router } from 'express';


const router = Router();

router.get('/', productsController.getAll);


export default router;