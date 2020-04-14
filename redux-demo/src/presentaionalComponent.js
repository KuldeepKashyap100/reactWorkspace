import React from 'react';
export default class PresentaionalComponent extends React.Component{
    enteredAmount=0;
    render(){
        return(
            <div>
                <h2>Available balance {this.props.accountBalance}</h2>
                <h3>Enter the amount to increase or decrease:</h3>
                <input type="number" onChange={(e)=>{this.enteredAmount=e.target.value}}/>
                <div>
                    <button onClick={()=>this.props.increaseBalance(this.enteredAmount)}>Increase</button>
                    <button onClick={()=>this.props.decreaseBalance(this.enteredAmount)}>Decrease</button>
                </div>
            </div>
        );
    }
}