import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
// import Checkout from "./containers/Checkout/Checkout";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
// import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/index";
import Spinner from './components/UI/Spinner/Spinner';
import { Suspense, lazy } from "react";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

const Orders = asyncComponent(() => import("./containers/Orders/Orders"));
const Checkout = lazy(() => import("./containers/Checkout/Checkout"));

class App extends React.Component {
  // state={
  //   flag:true
  // }
  // componentDidMount(){
  //   //setTimeout(()=>this.setState({flag:false}),3000);
  // }
  componentDidMount() {
    this.props.onTryAutoSignIn();
  }
  render() {
    let routeGuard = (
      <Switch>
        <Route path="/Auth" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routeGuard = (
        <Switch>
          <Route
            path="/checkOut"
            render={props => (
              <Suspense fallback={<Spinner/>}>
                <Checkout {...props}></Checkout>
              </Suspense>
            )}
          />
          <Route path="/orders" component={Orders} />
          <Route path="/Auth" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div className="App">
        <Layout>
          {/* {this.state.flag?<BurgerBuilder />:null} */}
          {/* <Switch> */}
          {routeGuard}
          {/* <Redirect path="/" to="/burgerBuilder" /> */}
          {/* <Route render={() => <h1>404 Not found</h1>} /> */}
          {/* </Switch> */}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(actionCreator.authCheckState())
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
