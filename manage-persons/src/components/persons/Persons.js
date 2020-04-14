import React,{PureComponent} from "react";
import Person from "./person/Person";
class Persons extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    console.log("Persons.js getDerivedStateFromProps");
    return state;
  }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("Persons.js shouldComponentUpdate", nextProps, nextState);
//     if (
//       nextProps.personArray !== this.props.personArray ||
//       nextProps.deleteHandler !== this.props.deleteHandler ||
//       nextProps.changeNameHandler!==this.props.changeNameHandler
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//     //return true;
//   }
  render() {
    console.log("Persons rendering...");
    return this.props.personArray.map((item, index) => (
      <Person
        key={item.id}
        name={item.name}
        age={item.age}
        deleteHandler={event => {
          this.props.deleteHandler(event, index);
        }}
        changeNameHandler={event =>
          this.props.changeNameHandler(event, item.id)
        }
      />
    ));
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Persons.js getSnapshotBeforeUpdate", prevProps, prevState);
    return { message: "Snapshot!" };
  }
  componentDidUpdate(prevProps, prevState, Snapshot) {
    console.log("Persons.js componentDidUpdate");
    console.log("Snapshot", Snapshot);
  }
  componentDidMount() {
    console.log("Persons.js componentDidMount");
  }
  componentWillUnmount() {
    console.log("Persons.js componentWillUnmount");
  }
}
export default Persons;
