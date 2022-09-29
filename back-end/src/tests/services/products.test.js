const { expect } = require('chai');
const sinon = require('sinon');
const { Products } = require('../../database/models');
const ProductService = require('../../services/ProductService');
const { listProductsMock } = require('../mocks/productMock');

describe('Product Service', () => {
  beforeEach(() => {
    sinon.stub(Products, 'findAll').resolves(listProductsMock);
  });
  
  afterEach(() => {
    sinon.restore();
  });

  describe('Create a product.', () => {
    const productService = new ProductService();
    it('Retorna o array de produtos', async() => {
      const result = await productService.readAll();
      expect(result).to.be.deep.equal(listProductsMock)
    })
  });
});