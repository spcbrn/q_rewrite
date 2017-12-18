import services from './../services';
import userController from './controllers/userController';
import testController from './controllers/testController'

const { combineControllers } = services;

const ducksController = combineControllers( { userController, testController } )

export default ducksController;
