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
  mockCreateAdm,
  mockGoodUser2,
  mockCreateService2,
  mockCreateError,
} = require('../mocks/UserService');

describe('Testes do User', () => {
  const userService = new UserService();

  before(async () => {
    sinon.stub(Users,'create').onCall(0).resolves(mockQuery)
      .onCall(1).resolves(mockCreateAdm)
      .onCall(2).throws()
      .onCall(3).throws();
    sinon.stub(Users,'destroy').onCall(0).resolves(1)
      .onCall(1).resolves(0);
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
    describe('Dados validos permite o administrador criar um usuário', () => {
      it('Com sucesso', async () => {
        const user = await userService.createAdm(mockGoodUser2);
        expect(user.name).to.be.deep.equal(mockCreateService2.name);
        expect(user.email).to.be.deep.equal(mockCreateService2.email);
        expect(user.role).to.be.deep.equal(mockCreateService2.role);
        expect(user.token.split('.')[0]).to.be.deep.equal(mockCreateService2.token);
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
    describe('Deleta um usuário', () => {
      it('com sucesso', async () => {
          const deleted = await userService.delete(3);
          expect(deleted).to.be.undefined;
      });
    })
    describe('Deleta um usuário', () => {
      it('sem sucesso', async () => {
        try {
          await userService.delete(2222);
        } catch (error) {
          expect(error.message).to.be.equal("User not found");
        }
      });
    })
    describe('Criar um usuário repetido', () => {
      it('Sem sucesso', async () => {
        try {
          await userService.create(mockCreateError);
        } catch (error) {
          expect(error.message).to.be.equal("Existing user!");
        }
      });
    })
    describe('O administrador criar um usuário repetido', () => {
      it('Sem sucesso', async () => {
        try {
            await userService.createAdm(mockCreateError);
        } catch (error) {
          expect(error.message).to.be.equal("Existing user!");
        }
      });
    })
  })
})