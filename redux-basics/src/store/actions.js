export const INCREMENT='INCREMENT';
export const DECREMENT='DECREMENT';
export const ADDSUTRACTFIVE='ADDSUTRACTFIVE';
export const STORE_RESULT='STORE_RESULT';
export const DELETE_RESULT='DELETE_RESULT';

export const increment = () => {
    return {
        type: 'INCREMENT'
    };
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
}

export const addSubtractFive = (value) => {
    return {
        type: 'ADDSUTRACTFIVE',
        value:value
    };
}

export const saveResult = (countValue) => {
    return {
        type: 'STORE_RESULT',
        countValue: countValue
    };
}

export const storeResult = (countValue) => {
    return (dispatch, getState) => {
        setTimeout(()=>{
            const counter = getState().counter;
            console.log('counter',counter);
            dispatch(saveResult(countValue));
        },2000);
    }
}

export const deleteResult = (index) => {
    return {
        type: 'DELETE_RESULT',
        index: index
    };
}