import {combineReducers} from 'redux';
import budgetReducer from './reducers';

const rootReducer = combineReducers({items: budgetReducer});
export default rootReducer;