import PresentaionalComponent from './presentaionalComponent';
import {connect} from 'react-redux';
import {increseAction,decreaseAction} from './storeAndReducers'

const mapStateToProps=(state)=>{
    return {accountBalance:state.accountBalance}
};
const mapDispatchToProps={
    increaseBalance:increseAction,
    decreaseBalance:decreaseAction
}
export default connect(mapStateToProps,mapDispatchToProps)(PresentaionalComponent);
