//can be present in AppContainer.js file
import { debitAction , creditAction } from './redux';
import AppRedux  from './AppRedux';
import { connect } from 'react-redux';
const mapStatetoProps = state => {
    return {pAccountBalance : state.accountBalance}
};
const mapDispatchToProps = {
    debit: debitAction,
    credit: creditAction
}
export default connect(mapStatetoProps,mapDispatchToProps)(AppRedux);
