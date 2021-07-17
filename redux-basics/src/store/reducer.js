import * as actionTypes from './actions';
const initialState={
    counter:0,
    result:[]
}
const reduer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter+1
            };
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter-1
            };
        case actionTypes.ADDSUTRACTFIVE:
            return {
                ...state,
                counter: state.counter+action.value
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat(state.counter)
            }
        case actionTypes.DELETE_RESULT:
            return {
                ...state,
                result: state.result.filter((item,index)=>index!==action.index)
            }
    }
    return state;
}

export default reduer;