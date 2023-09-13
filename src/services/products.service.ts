import ProductModel, {ProductInputtableTypes} from "../database/models/product.model";

async function create(product: ProductInputtableTypes) {
  const newProduct = await ProductModel.create(product);
  const { orderId, ...productResponse } = newProduct.dataValues;
  return { status: 201, data: productResponse};
};

async function getAll() {
  const products = await ProductModel.findAll();
  return { status: 200, data: products };
}

export default {
  create,
  getAll,
};