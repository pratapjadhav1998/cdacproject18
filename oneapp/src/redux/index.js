import {combineReducers} from 'redux';
import cartReducer from './reducers/CartReducer';

const rootReducer=combineReducers({
    cart : cartReducer
});

export default rootReducer;