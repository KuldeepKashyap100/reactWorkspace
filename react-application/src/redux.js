import { createStore, combineReducers } from 'redux';
const initialBankState = { accountBalance: 666666 };
// can be present in action.js file
export const debitAction = (amt) => ({
    type: 'DEBIT',
    amount: amt
});
export const creditAction = (amt) => ({
    type: 'CREDIT',
    amount: amt
});
// can be present in reducers.js file
export const accountReducer = (initialState = initialBankState.accountBalance, action) => {
    
    switch(action.type){
        case 'DEBIT':
            let newDebBal = initialState - action.amount;
            return newDebBal;
        case 'CREDIT':
            let newCredBal = initialState + (-(-action.amount));
            return newCredBal;
        default: 
            return initialState;              
    }
};
export const bankReducers = combineReducers({accountBalance: accountReducer});
// can be present in store.js file
function configureStore(){
    const store = createStore(bankReducers,initialBankState);
    return store;
}
export const bankStore = configureStore();
