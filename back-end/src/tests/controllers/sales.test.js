const { expect } = require('chai');
const sinon = require('sinon');
const SalesService = require('../../services/SalesService');
const SalesController = require('../../controllers/SalesController');
const { responseCreateSaleMocke, saleMock, userCustomerLocalStorage, listsSalesMock } = require('../mocks/sales.Mock');

describe('Sale Controller', () => {
  const salesService = new SalesService();
  const salesController = new SalesController(salesService);

  const req = {};
  const res = {};
  beforeEach(() => {
    sinon.stub(salesService, 'create').resolves(responseCreateSaleMocke.dataValues);
    sinon.stub(salesService, 'readAll').resolves(listsSalesMock)
    sinon.stub(salesService, 'update').resolves([1]);
    sinon.stub(salesService, 'delete').resolves(undefined);
    res.status = sinon.stub().returns(res);
    res.sendStatus = sinon.stub();
    res.json = sinon.stub();
  });
  
  afterEach(() => {
    sinon.restore();
  });

  describe('Create one sales', () => {
    it('Retorna o status 201 com a venda.', async() => {

      req.body = saleMock;
      req.headers = { authorization: userCustomerLocalStorage.token};
      await salesController.create(req, res);
      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledWith(responseCreateSaleMocke.dataValues)).to.be.true;
    });
  });

  describe('List all sales', () => {
    it('Retorna o status 200 com a venda.', async() => {
      req.headers = { authorization: userCustomerLocalStorage.token};
      await salesController.readAll(req, res);
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(listsSalesMock)).to.be.true;
    });
  });

  describe('Update one sales', () => {
    it('Retorna o status 200 com a venda.', async() => {
      req.body = { status: 'teste' };
      req.params = { id: 1 };
      req.headers = { authorization: userCustomerLocalStorage.token};
      await salesController.update(req, res);
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith([1])).to.be.true;
    });
  });

  describe('Delete one sales', () => {
    it('Retorna o status 204.', async() => {
      req.params = { id: 1 };
      req.headers = { authorization: userCustomerLocalStorage.token};
      await salesController.delete(req, res);
      expect(res.sendStatus.calledWith(204)).to.be.true;
    });
  });
});