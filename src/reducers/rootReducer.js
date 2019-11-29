import { combineReducers } from 'redux';
import propertyReducer from './listing_reducer';

// 
const rootReducer = combineReducers({
    home: propertyReducer
});

export default rootReducer;