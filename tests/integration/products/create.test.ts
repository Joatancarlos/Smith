import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productMock from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Criando um produto', async function () {
    sinon.stub(ProductModel, 'create').resolves(ProductModel.build(productMock.productModel));
    const httpResponse = await chai.request(app).post('/products').send(productMock.productSend);
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal(productMock.productResponse);
  });
});
