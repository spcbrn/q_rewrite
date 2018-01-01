import redux_services from './../redux_services';
import userActionsREST from './controllers/userActions_REST';
import testActionsREST from './controllers/testActions_REST'

const { combineActionControllers } = redux_services;

const actionsControllerREST = combineActionControllers( { userActionsREST, testActionsREST } );

export default actionsControllerREST;
