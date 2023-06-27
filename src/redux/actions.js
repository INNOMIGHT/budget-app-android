import {ADD_BUDGET, REMOVE_BUDGET} from './actionTypes';


export const AddBudget = payload => ({type: ADD_BUDGET, payload});
export const RemoveBudget = payload => ({type: REMOVE_BUDGET, payload});