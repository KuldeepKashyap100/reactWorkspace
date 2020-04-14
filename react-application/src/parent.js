import React,{Component} from 'react';
import {Child} from './child'
export class Parent extends Component{
    passAttribute="'Data from parent'"
    render(){
        return(
            <div>
                <h1>Parent Component</h1>
                <Child dataPassed={this.passAttribute}></Child>
            </div>
        );
    }
}