import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

interface ProductResponse {
  status: number;
  data: ProductData[] | ProductData;
}

type ProductData = {
  orderId?: number;
  id: number;
  name: string;
  price: string;
};

async function create(product: ProductInputtableTypes): Promise<ProductResponse> {
  const newProduct = await ProductModel.create(product);
  const { orderId, ...productResponse } = newProduct.dataValues;
  return { status: 201, data: productResponse as unknown as ProductData };
}

async function getAll(): Promise<ProductResponse> {
  const products = await ProductModel.findAll();
  return { status: 200, data: products as unknown as ProductData[] };
}

export default {
  create,
  getAll,
};