import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'

import { appReducer } from './AppReducer';
import { headerReducer } from './HeaderReducer';

const createStoreWithMiddleware = compose(applyMiddleware(ReduxThunk))(createStore);

const rootReducer = combineReducers({
    app: appReducer,
    header: headerReducer,
});

export default function configureStore(initialState = {
    header: {
        burgerIsDisplayed: false
    }
    }) {
        return createStoreWithMiddleware(rootReducer, initialState);
};