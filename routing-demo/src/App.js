import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import {BookCatalog} from './BookCatalog'
import { SelectedBook } from './SelectedBook';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' render={()=><Redirect to="/cards" push/>}></Route>
          <Route path='/cards' component={BookCatalog}></Route>
          <Route path='/card/:cardId' component={SelectedBook}></Route>
        </Switch>
      </div>
    );
  }
}
