const { expect } = require('chai');
const sinon = require('sinon');
const { Users, Sales, SalesProducts } = require('../../database/models');
const SalesService = require('../../services/SalesService');
const { listsSalesMock, responseCreateSaleMocke, saleMock, userCustomerLocalStorage } = require('../mocks/sales.Mock');

describe('Sales Service', () => {
  beforeEach(() => {
    sinon.stub(Sales, 'create').resolves(responseCreateSaleMocke);
    sinon.stub(SalesProducts, 'bulkCreate').resolves([
      { saleId: 1, productId: 2, quantity: 2 },
      { saleId: 1, productId: 4, quantity: 2 }
    ])
    sinon.stub(Users, 'findOne').resolves({ id: 3 });
    sinon.stub(Sales, 'findAll').resolves(listsSalesMock);
    sinon.stub(Sales, 'update').resolves([1]);
    sinon.stub(Sales, 'destroy').resolves(1);
  });
  
  afterEach(() => {
    sinon.restore();
  });

  describe('Create a sales', () => {
    const salesService = new SalesService();
    it('Retorna o array de sales', async() => {
      const result = await salesService.create(saleMock, userCustomerLocalStorage);
      expect(result).to.be.equal(responseCreateSaleMocke.dataValues);
    });
  })

  describe('Retornando a lista', () => {
    const salesService = new SalesService();
    it('Retornando todos os sellers', async () => {
      const result = await salesService.readAll(listsSalesMock);
      expect(result).to.deep.equal(listsSalesMock)
    })
  })

  describe('Testando update', () => {
    const salesService = new SalesService();
    describe('Realizado com sucesso', () => {
      it('Retornando os dados corretamente', async () => {
        const result = await salesService.update(1, {status: 'Entregue'});
        expect(result).to.be.deep.equal([1])
      })
      // it('Retornando o status inválido', async () => {
      //   const result = await salesService.update(1, {status: 'Entregue'})
      //   expect(result).to.be.deep.equal([0])
      // })
    })
  })
  describe('Testando delete', () => {
    const salesService = new SalesService();
    describe('Realizado com sucesso', () => {
      it('Retornando os dados corretamente', async () => {
        const result = await salesService.delete(1);
        expect(result).to.be.deep.equal(undefined)
      })
    })
  })
});
