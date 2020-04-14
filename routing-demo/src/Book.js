import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
export class Book extends Component{
    constructor(){
        super();
        this.bookArray=[
            {title:"Angels and Demons",publisher:"Prnguin Random House",author:"Dan Brown",price:409,prodId:2012},
            {title:"Norse Mythology",publisher:"Bloomsbury Publishing",author:"Neil Gaiman",price:300,prodId:2019}
        ];
        this.state={editFlag:false}
    }
    edit=()=>{
        this.setState({editFlag:true});
    }
    render(){
        debugger;
        var redirect=null;
        if(this.state.editFlag)
            redirect=<Redirect to={"./card/"+this.props.book.prodId}></Redirect>
        return (
            <div className="parent">
                <div className="heading text-primary">Featured Title</div>
                <div className="card">
                    <div className="sub-heading">{this.props.book.title}</div>
                    <div>
                        <span>Author:</span>&nbsp;
                        <span className="font-weight-bold">{this.props.book.author}</span>
                    </div>
                    <div>
                        <span>Publisher:</span>&nbsp;
                        <span className="font-weight-bold">{this.props.book.publisher}</span>
                    </div>
                    <div>
                        <span>Price:</span>&nbsp;
                        <span className="font-weight-bold">{this.props.book.price}</span>
                        {this.props.book.price<400?<span className="text-success">-Bestseller</span>:<span></span>}
                    </div>
                    <br/>
                    <div>
                        <span>Product Id:</span>&nbsp;
                        <span>{this.props.book.prodId}</span>
                    </div>
                    <br/>
                    <div>
                        <button className="btn btn-primary" onClick={this.edit}>Edit</button>
                        <button className="btn btn-success">View</button>
                    </div>
                    {redirect}
                </div>
            </div>
        );
    }
}