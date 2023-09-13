import { Request, Response } from 'express';
import  ProductService from '../services/products.service';

async function create(req: Request, res: Response) {
  const { status, data } = await ProductService.create(req.body);
  res.status(status).json(data);
}


export default {
  create,
};
