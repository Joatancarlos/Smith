import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

async function getAll(req: Request, res: Response) {
  const { status, data } = await OrderService.getAll();
  res.status(status).json(data);
}

export default {
  getAll,
};
