import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger())(createStore);

export default function configureStore(initialState = {}) {

    const store = createStoreWithMiddleware(rootReducer, initialState);

    return store;
}
