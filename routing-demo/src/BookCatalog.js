import React from 'react';
import {Book} from './Book';
import _ from 'lodash';
export class BookCatalog extends React.Component{
    constructor(){
        super();
        this.bookArray=[
            {title:"Angels and Demons",publisher:"Prnguin Random House",author:"Dan Brown",price:409,prodId:2012},
            {title:"Norse Mythology",publisher:"Bloomsbury Publishing",author:"Neil Gaiman",price:300,prodId:2019}
        ];
    }
    render(){
        return (
            <div>
                {_.map(this.bookArray,_=>{
                    return (
                        <Book book={_}></Book>
                    );
                })}
            </div>
        );
    }
}