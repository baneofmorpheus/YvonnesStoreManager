import { combineReducers } from 'redux';

import authenticationReducer from './authentication';
import storeReducer from './store';


const rootReducer = combineReducers({
    authentication: authenticationReducer,
    store: storeReducer,

});

export default rootReducer;
