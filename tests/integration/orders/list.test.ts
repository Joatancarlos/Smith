import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import ProductModel from '../../../src/database/models/product.model';
import app from '../../../src/app';
import ordersMock from '../../mocks/orders.mock';
chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('se tiver tudo ok', async function () {
    sinon.stub(OrderModel, 'findAll').resolves(
      ordersMock.allOrdersModel.map((order) => 
        OrderModel.build(order, {
          include: { model: ProductModel, as: 'productIds', attributes: ['id'] },
        }))
    );
    const httpResponse = await chai.request(app).get('/orders').send();
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(ordersMock.allOrdersResponse);
  });
});
