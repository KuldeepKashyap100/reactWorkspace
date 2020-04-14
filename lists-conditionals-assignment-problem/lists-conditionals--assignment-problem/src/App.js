import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';

class App extends Component {
  state={
    inputField:""
  }
  changeListener=(event)=>{
    this.setState({inputField:event.target.value});
  }
  render() {
    // var charComponentArray=[];
    // this.state.inputField.split('').map(_=>{
    //   charComponentArray.push(<CharComponent Characer={_}/>);
    // });
    
    return (
      <div className="App">
        <ol>
          {/* <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li> */}
          {/* <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li> */}
          {/* <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li> */}
          {/* <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li> */}
          {/* <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li> */}
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <input type="text" value={this.state.inputField} onChange={this.changeListener}/>
        <ValidationComponent textLength={this.state.inputField.length}></ValidationComponent>
        <CharComponent></CharComponent>
      </div>
    );
  }
}

export default App;
