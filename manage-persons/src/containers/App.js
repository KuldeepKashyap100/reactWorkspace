import React from "react";
import classes from "./App.module.css";
import Persons from "../components/persons/Persons";
import Cockpit from "../components/cockpit/Cockpit";
import WithClasses from "../components/hoc/WithClasses";
import byUsingMethodApproach from "../components/hoc/byUsingMethodApproach";
import Aux from "../components/hoc/Auxiliary";
import AuthContext from "../components/context/AuthContext";

class App extends React.Component {
  //when the element is created
  constructor(props) {
    console.log("App.js constructor");
    super(props);
    this.state = {
      persons: [
        { id: "fasas", name: "kuldeep", age: 24 },
        { id: "afafas", name: "pranav", age: 23 }
      ],
      showPersons: false,
      showCockpit: true,
      title: "I love react",
      counter: 0,
      authenticaton: false
    };
  }
  //Creation and updation
  static getDerivedStateFromProps(props, state) {
    console.log("App.js getDerivedStateFromProps", props, state);
    return state;
  }

  changeNameHandler = (event, id) => {
    const index = this.state.persons.findIndex(_ => _.id === id);
    const elementNeedToBeChanged = { ...this.state.persons[index] };
    elementNeedToBeChanged.name = event.target.value;
    const persons = [...this.state.persons];
    persons[index] = elementNeedToBeChanged;
    this.setState((prevState, props) => {
      console.log(prevState, props);
      return {
        persons: persons,
        counter: prevState.counter + 1
      };
    });
  };

  deleteHandler = (event, index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  toggleAuthenticationHandler = () => {
    this.setState({ authenticaton: !this.state.authenticaton });
  };

  render() {
    console.log("App rendering...");
    var personArray = null;
    if (this.state.showPersons) {
      personArray = (
        <Persons
          personArray={this.state.persons}
          deleteHandler={this.deleteHandler}
          changeNameHandler={this.changeNameHandler}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() =>
            this.setState({ showCockpit: !this.state.showCockpit })
          }
        >
          Toggle cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticaton: this.state.authenticaton,
            toggleAuthenticationHandler: this.toggleAuthenticationHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.state.title}
              personArray={this.state.persons}
              togglePersonsHandler={this.togglePersonsHandler}
            />
          ) : null}
          {personArray}
        </AuthContext.Provider>
      </Aux>
    );
  }
  //when the element is created
  componentDidMount() {
    console.log("App.js componentdidmount");
  }
}
export default byUsingMethodApproach(App, classes.App);