import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BookContainer} from './BookContaier';
    var books=[
        {
            "author": "Frank Herbert",
            "title": "Dune",
            "summary": "The story of a boy and a great family’s ambitious attempt to realize mankind’s most ancient and unattainable dream."
        },
         
        {
            "author": "Mur Lafferty",
            "title": "Six Wakes",
            "summary": "A crew of clones awakens aboard a space ship to find they're being hunted-and any one of them could be the killer."
        },
         
        {
            "author": "Yann Martel",
            "title": "Life of Pi",
            "summary": " An inspirational tale of survival, endurance, resilience and faith"
        }
    ];
     
ReactDOM.render(<BookContainer books={books}></BookContainer>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
