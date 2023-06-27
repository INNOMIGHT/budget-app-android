import { ADD_BUDGET, REMOVE_BUDGET } from "./actionTypes";



const initialState = {
    items: []
};

const budgetReducer = (state = initialState, action) => {

    const handleRemoveItem = (item, items) => {
        // const itemIndex = items.indexOf(item);
        // newItems = items;
        // newItems.splice(itemIndex, 1);
        // return newItems;
        items = []
        return items
    }
    
    switch(action.type){
        case ADD_BUDGET:
            return {items: [...state.items, action.payload]};
        case REMOVE_BUDGET:
            return {items: []};
        default:
            return state;
    } 
   
};

export default budgetReducer;
