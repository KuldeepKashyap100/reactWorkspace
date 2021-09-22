import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./Auth.module.css";
import { connect } from "react-redux";
import * as actionCreater from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import {Redirect} from 'react-router-dom';
import {checkValidation, updatedObject} from '../../shared/utility';

class Auth extends React.Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Email Address"
        },
        value: "",
        touched: false,
        valid: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        touched: false,
        valid: false,
        validation: {
          required: true
        }
      }
    },
    formIsValid: false,
    isSignUp: false
  };
  onChangeHandler = (event, controlIdentifier) => {
    // const updatedAuthForm = { ...this.state.controls };
    // const updatedAuthElement = { ...this.state.controls[inputIdentifier] };
    // updatedAuthElement.value = event.target.value;
    // updatedAuthElement.valid = this.checkValidation(
    //   updatedAuthElement.value,
    //   updatedAuthElement.validation
    // );
    // updatedAuthElement.touched = true;
    // updatedAuthForm[inputIdentifier] = updatedAuthElement;
    // let formIsValid = true;
    // for(let inputIdentifier in updatedAuthForm){
    //   formIsValid = updatedAuthForm[inputIdentifier].valid && formIsValid;
    // }
    const updatedControls = {
      ...this.state.controls,
      [controlIdentifier]: {
        ...this.state.controls[controlIdentifier],
        value: event.target.value,
        valid: checkValidation(
          event.target.value,
          this.state.controls[controlIdentifier].validation
        ),
        touched: true
      }
    };
    this.setState({ controls: updatedControls });
  };
  onSubmitHandler = event => {
    event.preventDefault();
    this.props.onAuth(
      // this.state.controls.email.value,
      // this.state.controls.password.value,
      "TEST@TEST.com",
      "1234",
      this.state.isSignUp
    );
  };
  switchAuthModeHandler = event => {
    this.setState(prevState => {
      return { isSignUp: !prevState.isSignUp };
    });
  };
  componentDidMount(){
    if(!this.props.building && this.props.authRedirectPath!=='/'){
      this.props.onSetAuthRedirectPath();
    }
  }
  render() {
    const authElementArray = [];
    for (let key in this.state.controls) {
      authElementArray.push(
        <Input
          key={key}
          elementname={key}
          changed={event => this.onChangeHandler(event, key)}
          isvalid={this.state.controls[key].valid}
          elementtype={this.state.controls[key].elementType}
          shouldvalidate={this.state.controls[key].validation}
          touched={this.state.controls[key].touched}
          {...this.state.controls[key].elementConfig}
        />
      );
    }
    let form = <Spinner></Spinner>;
    if (!this.props.loading) {
      form = (
        <div>
          <form>
            {authElementArray}
            <Button btnType="Success" click={this.onSubmitHandler}>
              Log In
            </Button>
          </form>
          <Button btnType="Danger" click={this.switchAuthModeHandler}>
            Switch to {this.state.isSignUp ? "Sign In" : "Sign Up"}
          </Button>
        </div>
      );
    }
    let error = null;
    if (this.props.error) error = <div>{this.props.error}</div>;

    let redirectAfterAuthenication = null;
    if (this.props.isAuthenticated)
      redirectAfterAuthenication = <Redirect to={this.props.authRedirectPath}/>;

    return (
      <div className={classes.Auth}>
        {redirectAfterAuthenication}
        {error}
        {form}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.authReducer.loading,
    error: state.authReducer.error,
    isAuthenticated: state.authReducer.token !== null,
    authRedirectPath: state.authReducer.authRedirectPath,
    building: state.burgerBuilderReducer.building
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actionCreater.auth(email, password, isSignUp)),
    onSetAuthRedirectPath: () => dispatch(actionCreater.setAuthRedirectPath('/'))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
