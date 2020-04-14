import { createStore, combineReducers } from 'redux';

const initialBalance = { accountBalance: 100000 };

//actions
export const increseAction = (amt) => {
    return {
        type: 'INCREASE',
        amount: amt
    }
};
export const decreaseAction = (amt) => ({
    type: 'DECREASE',
    amount: amt
});

export const accountBalanceReducers = (initialState = initialBalance.accountBalance, action) => {
    switch (action.type) {
        case 'INCREASE':
            let newIncreasedBalance = initialState -(-action.amount);
            return newIncreasedBalance;
        case 'DECREASE':
            let newDecreasedBalance = initialState - action.amount;
            return newDecreasedBalance;
        default:
            return initialState;
    }
}
export const balanceReducers = combineReducers({ accountBalance: accountBalanceReducers });

//creating store
function configureStore() {
    var balanceStore = createStore(balanceReducers, initialBalance);
    return balanceStore;
}
export const balanceStore = configureStore();