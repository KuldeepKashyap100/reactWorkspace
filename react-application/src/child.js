import React,{Component} from 'react';

export class Child extends Component{
    render(){
        return(
            <div>Child Component, Data obtained is <h3>{this.props.dataPassed}</h3></div>
        );
    }
}