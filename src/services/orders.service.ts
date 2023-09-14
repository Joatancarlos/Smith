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
  const formattedOrders = orders.map((order) => {
    const newOrder = order.toJSON();
    newOrder.productIds = newOrder.productIds?.map((id) =>
      (typeof id === 'object' ? id.id : id));
    return newOrder;
  });
  return { status: 200, data: formattedOrders as unknown as OrderData[] };
}

export default {
  getAll,
};