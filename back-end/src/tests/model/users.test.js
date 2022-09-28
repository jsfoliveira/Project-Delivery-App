import * as sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import { carMock, carMockList, carMockUpdate, carMockUpdateWithId, carMockWithId } from '../../mocks/carMock';
import CarModel from '../../../models/Car';
import { ErrorTypes } from '../../../errors/catalog';

describe('Car Model', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves(carMockList);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockUpdateWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Creating a car', () => {
    it('successfully created', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });

  describe('Finding all cars', () => {
    it('successfully found', async () => {
      const cars = await carModel.read();
      expect(cars).to.be.deep.equal(carMockList);
    });
  });

  describe('Finding one car', () => {
    it('successfully found', async () => {
      const carFound = await carModel.readOne('62cf1fc6498565d94eba52cd');
      expect(carFound).to.be.deep.equal(carMockWithId);
    });
    it('_id not found', async () => {
      try {
        await carModel.readOne('111111111');
      } catch (error) {
        expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
      }
    });
  });

  describe('Updating a car', () => {
    it('successfully update', async () => {
      const newCar = await carModel.update('62cf1fc6498565d94eba52cd', carMockUpdate);
      expect(newCar).to.be.deep.equal(carMockUpdateWithId);
    });
  });
});