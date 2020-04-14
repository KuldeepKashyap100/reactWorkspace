import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

function kk(){
    var bookArray=[
        {title:"Angels and Demons",publisher:"Prnguin Random House",author:"Dan Brown",price:409,prodId:2012},
        {title:"Norse Mythology",publisher:"Bloomsbury Publishing",author:"Neil Gaiman",price:300,prodId:2019}
    ];
    return (
        <div className="parent">
            <div className="heading text-primary">Featured Title</div>
                <div className="card">
                    <div className="sub-heading">{bookArray[0].title}</div>
                    <div>
                        <span>Author:</span>&nbsp;
                        <span className="font-weight-bold">{bookArray[0].author}</span>
                    </div>
                    <div>
                        <span>Publisher:</span>&nbsp;
                        <span className="font-weight-bold">{bookArray[0].publisher}</span>
                    </div>
                    <div>
                        <span>Price:</span>&nbsp;
                        <span className="font-weight-bold">{bookArray[0].price}</span>
                        {bookArray[0].price<400?<span className="text-success">-Bestseller</span>:<span></span>}
                    </div>
                    <br/>
                    <div>
                        <span>Product Id:</span>&nbsp;
                        <span>{bookArray[0].prodId}</span>
                    </div>
                </div>
            <div className="card">
                <div className="sub-heading">{bookArray[0].title}</div>
                <div>
                    <span>Author:</span>&nbsp;
                    <span className="font-weight-bold">{bookArray[1].author}</span>
                </div>
                <div>
                    <span>Publisher:</span>&nbsp;
                    <span className="font-weight-bold">{bookArray[1].publisher}</span>
                </div>
                <div>
                    <span>Price:</span>&nbsp;
                    <span className="font-weight-bold">{bookArray[1].price}</span>
                    {bookArray[1].price<400?<span className="text-success">-Bestseller</span>:<span></span>}
                </div>
                <br/>
                <div>
                    <span>Product Id:</span>&nbsp;
                    <span>{bookArray[1].prodId}</span>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(kk(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
