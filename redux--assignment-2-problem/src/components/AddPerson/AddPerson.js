import React from "react";
import "./AddPerson.css";

class AddPerson extends React.Component {
  state = {
    name: "",
    age: ""
  };
  onNameChangeHandler(event){
      this.setState({name:event.target.value});
  }
  onAgeChangeHandler(event){
      this.setState({age:event.target.value});
  }
  render() {
    return (
      <div className="AddPerson">
        <input type="text" value={this.state.name} placeholder="name" onChange={this.onNameChangeHandler.bind(this)}/>
        <input type="number" value={this.state.age} placeholder="age" onChange={this.onAgeChangeHandler.bind(this)}/>
        <button onClick={()=>this.props.personAdded(this.state.name,this.state.age)}>Add Person</button>
      </div>
    );
  }
}

export default AddPerson;
