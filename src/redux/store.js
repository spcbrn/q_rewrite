import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import io from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';
import logger from 'redux-logger';

import reducer from './main_reducer';

const socket = io()
    , socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

const storeInit = () => {
  return process.env.NODE_ENV === 'development'
         ? createStore(
             reducer,
             applyMiddleware(
               promiseMiddleware(),
               socketIoMiddleware,
               logger
             )
           )
         : createStore(
             reducer,
             applyMiddleware(
               promiseMiddleware(),
               socketIoMiddleware
             )
           );
};

const store = storeInit();

export default store;
