import * as actionTypes from '../actions/actionTypes';
import {updatedObject} from '../../shared/utility';

const initialState = {
    token:null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
}
const authStart = (state) => {
    return updatedObject(state, {error: null, loading: true});
};
const authSuccess = (state,action) => {
    return updatedObject(state,{token:action.token,userId:action.userId,loading:false});
}
const authFail = (state,action) => {
    return updatedObject(state,{token:null,userId:null,error: action.error,loading:false});
}
const authLogOut = (state) => {
    return updatedObject(state,{token:null,userId:null});
};
const setAuthRedirectPath = (state,action) => {
    return updatedObject(state,{authRedirectPath: action.path});
};
const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.AUTH_START:
            return authStart(state);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state,action);
        case actionTypes.AUTH_FAIL:
            return authFail(state,action);
        case actionTypes.AUTH_LOG_OUT:
            return authLogOut(state);
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return setAuthRedirectPath(state,action);
        default:
            return state;
    }
}
export default authReducer;