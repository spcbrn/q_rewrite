import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import io from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';
import logger from 'redux-logger';

import reducer from './main_reducer';

const redux_devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    , socket = io()
    , socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

const storeInit = () =>  process.env.NODE_ENV === 'development'
                         ? createStore(
                             reducer,
                             redux_devtools,
                             applyMiddleware(
                               promiseMiddleware(),
                               socketIoMiddleware,
                               logger
                             )
                           )
                         : createStore(
                             reducer,
                             redux_devtools,
                             applyMiddleware(
                               promiseMiddleware(),
                               socketIoMiddleware
                             )
                           );

const store = storeInit();

export default store;
