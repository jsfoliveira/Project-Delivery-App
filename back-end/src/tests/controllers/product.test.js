const { expect } = require('chai');
const sinon = require('sinon');
const ProductController = require('../../controllers/ProductController');
const ProductService = require('../../services/ProductService');
const { listProductsMock } = require('../mocks/productMock');

describe('Product Controller', () => {
  const productService = new ProductService();
  const productsController = new ProductController(productService)
  
  const req = {};
  const res = {};
  
  beforeEach(() => {
    sinon.stub(productService, 'readAll').resolves(listProductsMock);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();
  });
  
  afterEach(() => {
    sinon.restore();
  });

  describe('Create a product.', () => {
    
    it('Retorna o status 200 com o array', async() => {
      await productsController.readAll(req, res);
      expect(res.status.calledWith(200)).to.be.deep.equal(true);
      expect(res.json.calledWith(listProductsMock)).to.be.equal(true);
    })
  });
});