const {expect} = require('chai');
const { Users } = require('../../database/models');
const sinon = require('sinon');
const UserService = require('../../services/UsersService');
const {
  mockListAll,
  mockGoodUser,
  mockQuery,
  mockCreateService,
  mockListSeller,
} = require('../mocks/UserService');

describe('Testes do User', () => {
  const userService = new UserService();

  before(async () => {
    sinon.stub(Users,'create').resolves(mockQuery);
    sinon.stub(Users,'destroy').resolves(1);
    sinon.stub(Users,'findAll').onCall(0).resolves(mockListAll)
      .onCall(1).resolves(mockListSeller);
  })
  
  after(() => {
    sinon.restore();
  })

  describe('Teste do UserService', () => {
    describe('Dados validos permite criar um usuário', () => {
      it('Com sucesso', async () => {
        const user = await userService.create(mockGoodUser);
        expect(user.name).to.be.deep.equal(mockCreateService.name);
        expect(user.email).to.be.deep.equal(mockCreateService.email);
        expect(user.role).to.be.deep.equal(mockCreateService.role);
        expect(user.token.split('.')[0]).to.be.deep.equal(mockCreateService.token);
      });
    })
    describe('Permite listar todos os usuários', () => {
      it('Com sucesso', async () => {
        const users = await userService.readAll();
        expect(users).to.be.deep.equal(mockListAll);
      });
    })
    describe('Permite listar todos os usuários que são vendedores', () => {
      it('Com sucesso', async () => {
        const sellers = await userService.readSeller('seller');
        expect(sellers).to.be.deep.equal(mockListSeller);
      });
    })
    // describe('Deleta um usuário', () => {
    //   it('Com sucesso', async () => {
    //     await userService.delete(3);
    //     expect(deleted).to.not.include(mockDeleteList);
    //   });
    // })
  })
})