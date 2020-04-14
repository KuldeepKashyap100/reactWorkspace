import * as actionTypes from '../actions';
const initialState={
    result:[]
}
const resultReduer=(state=initialState,action)=>{
    
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat(action.countValue)
            }
        case actionTypes.DELETE_RESULT:
            return {
                ...state,
                result: state.result.filter((item,index)=>index!==action.index)
            }
    }
}

export default resultReduer;