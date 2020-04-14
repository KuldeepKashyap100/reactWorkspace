import React from "react";
import classes from "./Person.module.css";
import Aux from "../../hoc/Auxiliary";
import byUsingMethodApproach from "../../hoc/byUsingMethodApproach";
import PropTypes from "prop-types";
import AuthContext from "../../context/AuthContext";
class Person extends React.Component {
  constructor(props) {
    super(props);
    this.elementReference = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.elementReference.current.focus();
    console.log(this.context);
  }
  render() {
    console.log("Person rendering...");

    return (
      <Aux>
        {/* <AuthContext.Consumer>
          {context => (
            <div>Authenticated: {context.authenticaton.toString()}</div>
          )}
        </AuthContext.Consumer> */}

        <div>Authenticated: {this.context.authenticaton.toString()}</div>

        <div onClick={this.props.deleteHandler}>
          I am {this.props.name} and i am {this.props.age} years old!
        </div>
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.changeNameHandler}
          //ref={(elementReference)=>{this.elementReference=elementReference}}
          ref={this.elementReference}
        />
      </Aux>
    );
    // return [
    //     <div onClick={this.props.deleteHandler}>
    //       I am {this.props.name} and i am {this.props.age} years old!
    //     </div>,
    //     <input
    //       type="text"
    //       value={this.props.name}
    //       onChange={this.props.changeNameHandler}
    //     />
    // ];
    // return (
    //   <div className={classes.Person}>
    //     <div onClick={this.props.deleteHandler}>
    //       I am {this.props.name} and i am {this.props.age} years old!
    //     </div>
    //     <input
    //       type="text"
    //       value={this.props.name}
    //       onChange={this.props.changeNameHandler}
    //     />
    //   </div>
    // );
  }
}
Person.propTypes = {
  deleteHandler: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changeNameHandler: PropTypes.func
};
export default byUsingMethodApproach(Person);
