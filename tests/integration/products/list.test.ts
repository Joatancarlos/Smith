import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import productMock from '../../mocks/product.mock';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('se tiver tudo ok', async function () {
    sinon.stub(ProductModel, 'findAll').resolves(productMock.productResponseAll.map(product => ProductModel.build(product)));
    const httpResponse = await chai.request(app).get('/products');
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(productMock.productResponseAll);
  });
});
