const {expect} = require('chai');
const sinon = require('sinon');
const UserService = require('../../services/UsersService');
const UserController = require('../../controllers/UserController');
const {
  mockListAll,
  mockCreateService,
  mockListSeller,
  mockCreateService2,
} = require('../mocks/UserService');


describe('Testes do User', () => {
  const userService = new UserService();
  const userController = new UserController(userService);

  const req = {};
  const res = {};

  before(async () => {
    sinon.stub(userService,'create').resolves(mockCreateService);
    sinon.stub(userService,'createAdm').resolves(mockCreateService2);
    sinon.stub(userService,'readAll').resolves(mockListAll);
    sinon.stub(userService,'readSeller').resolves(mockListSeller);
    sinon.stub(userService,'delete').resolves();

    res.status = sinon.stub().returns(res);
    res.sendStatus = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  })
  
  after(() => {
    sinon.restore();
  })

  describe('Teste do UserController', () => {
    describe('Dados validos permite criar um usuário', () => {
      it('Com sucesso', async () => {
        await userController.create(req, res);
        expect((res.status).calledWith(201)).to.be.true;
        expect((res.json).calledWith(mockCreateService)).to.be.true;
      });
    })
    describe('Dados validos permite o administrador criar um usuário', () => {
      it('Com sucesso', async () => {
        req.headers = { authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGVsaXZlcnkgQXBwIEFkbWluIiwiZW1haWwiOiJhZG1AZGVsaXZlcnlhcHAuY29tIiwicm9sZSI6ImFkbWluaXN0cmF0b3IiLCJpYXQiOjE2NjQ0ODA3NDd9.Acx1J5LDIXkXEeVwoZcsU6FpZcxrd3kCXIczBkHuy2s'}
        await userController.createAdm(req, res);
        expect((res.status).calledWith(201)).to.be.true;
        expect((res.json).calledWith(mockCreateService2)).to.be.true;
      });
    })
    describe('Permite listar todos usuários', () => {
      it('Com sucesso', async () => {
        req.headers = { authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGVsaXZlcnkgQXBwIEFkbWluIiwiZW1haWwiOiJhZG1AZGVsaXZlcnlhcHAuY29tIiwicm9sZSI6ImFkbWluaXN0cmF0b3IiLCJpYXQiOjE2NjQ0ODA3NDd9.Acx1J5LDIXkXEeVwoZcsU6FpZcxrd3kCXIczBkHuy2s'}
        await userController.readAll(req, res);
        expect((res.status).calledWith(200)).to.be.true;
        expect((res.json).calledWith(mockListAll)).to.be.true;
      });
    })
    describe('Permite listar todos usuários', () => {
      it('Com sucesso', async () => {
        req.headers = { authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2xpZW50ZSBaw6kgQmlyaXRhIiwiZW1haWwiOiJ6ZWJpcml0YUBlbWFpbC5jb20iLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE2NjQ0ODUwOTJ9.-WJ4UaeIKAuVuDxCcixb5xmeCooavKSFamELOtbTcCc'}
        await userController.readSeller(req, res);
        expect((res.status).calledWith(200)).to.be.true;
        expect((res.json).calledWith(mockListSeller)).to.be.true;
      });
    })
    describe('Permite listar todos usuários', () => {
      it('Com sucesso', async () => {
        req.headers = { authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGVsaXZlcnkgQXBwIEFkbWluIiwiZW1haWwiOiJhZG1AZGVsaXZlcnlhcHAuY29tIiwicm9sZSI6ImFkbWluaXN0cmF0b3IiLCJpYXQiOjE2NjQ0ODA3NDd9.Acx1J5LDIXkXEeVwoZcsU6FpZcxrd3kCXIczBkHuy2s'}
        req.params = { id: 3 };
        await userController.delete(req, res);
        expect((res.sendStatus).calledWith(204)).to.be.true;
      });
    })
  })
})