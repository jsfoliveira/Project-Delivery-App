const { expect } = require('chai');
const sinon = require('sinon');
const jwt = require('../../services/utils/jwt');
const TokenController = require('../../controllers/TokenController');
const { mockTokenDecoded } = require('../mocks/UserService');

describe('Testes do token Controller', () => {
  const req = {};
  const res = {};

  before(async () => {
    sinon.stub(jwt, 'verify').returns(mockTokenDecoded);
   
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  })
  
  after(() => {
    sinon.restore();
  })

  describe('Teste se possui um token', () => {
    describe('Permite gerar um token', () => {
      it('Com sucesso', async () => {
        req.headers = { authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGVsaXZlcnkgQXBwIEFkbWluIiwiZW1haWwiOiJhZG1AZGVsaXZlcnlhcHAuY29tIiwicm9sZSI6ImFkbWluaXN0cmF0b3IiLCJpYXQiOjE2NjQ0ODA3NDd9.Acx1J5LDIXkXEeVwoZcsU6FpZcxrd3kCXIczBkHuy2s'}
        TokenController(req, res);
        expect((res.status).calledWith(200)).to.be.true;
        expect((res.json).calledWith(mockTokenDecoded)).to.be.true;
      });
    });
  })
});