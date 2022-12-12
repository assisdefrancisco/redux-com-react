import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contador from './contador';
import logger from './middleware/logger';
import modal from './modal';

const middleware = [...getDefaultMiddleware(), logger];

const reducer = combineReducers({ contador, modal });
const store = configureStore({ reducer, middleware });

export default store;