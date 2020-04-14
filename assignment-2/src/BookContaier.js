import React,{Component} from 'react';
import {Book} from './Book';

export class BookContainer extends Component{
    render(){
        return (
            <div>
                {this.props.books.map(_=>{
                    return (
                        <Book selectedBook={_}></Book>
                    );
                })}
            </div>
        );  
    }
}