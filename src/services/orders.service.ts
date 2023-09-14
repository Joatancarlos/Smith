import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

interface OrderResponse {
  status: number;
  data: OrderData[] | OrderData;
}

type OrderData = {
  id: number;
  userId: number;
  productIds: number[];
};

async function getAll(): Promise<OrderResponse> {
  const orders = await OrderModel.findAll({
    include: { model: ProductModel, as: 'productIds', attributes: ['id'] },
  });
  const ordersJson = orders.map((order) => order.toJSON());

  const result = ordersJson.map((order) => {
    const productIds = (order.productIds as { id: number }[]).map((product) => product.id);
    return { ...order, productIds };
  });
  return { status: 200, data: result as unknown as OrderData[] };
}

export default {
  getAll,
};