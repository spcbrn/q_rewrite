import redux_services from './../redux_services';
import userController from './controllers/userController';
import testController from './controllers/testController'

const { combineControllers } = redux_services;

const restController = combineControllers( { userController, testController } )

export default restController;
