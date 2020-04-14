import React from 'react';
import './App.css';
import {BrowserRouter as Router,Link,Route,Redirect} from 'react-router-dom';
import {tempComponent} from './temp';

const Home=()=><h1>Home Component</h1>
const News=()=><h1>News Component</h1>
export default class App extends React.Component{
  render(){
    return (
      <Router>
        <React.Fragment>
          <nav className="navbar navbar-inverse"> 
            <Link to={'/'}>Home</Link>
            <Link to={'/news'}>News</Link>
            <Link to={'/contacts'}>Contacts</Link>
            <Link to={'/temp/kuldeep'}>Temp</Link>
          </nav>
          <div>
            <Route exact path='/' render={()=><Redirect to='/home' push/>}></Route>
            <Route exact path='/home/:name' component={Home}></Route>
            <Route path='/news' component={News}></Route>
            <Route path='/contacts' render={()=><h1>Contacts Component</h1>}></Route>
            <Route path='/temp/:username' component={tempComponent}></Route>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}
