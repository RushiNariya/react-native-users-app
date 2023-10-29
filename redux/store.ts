import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

export type AppDispatch = ThunkDispatch<any, any, AnyAction>;
