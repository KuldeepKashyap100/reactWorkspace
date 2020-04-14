import React from 'react';
import {Route,BrowserRouter,Redirect,Switch} from 'react-router-dom';
import {ViewAllBooks} from './view-all-books';
import {AddBook} from './add-book';
import {ContactUs} from './contact-us';
export class LandingComponent extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">Learning Portal</a>
                        </div>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="active nav-item"><a className="nav-link" href="/view-all-books">View all books</a></li>
                                <li className="nav-item"><a className="nav-link" href="/add-a-book">Add a book</a></li>
                                <li className="nav-item"><a className="nav-link" href="/contact-us">contact us</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" render={()=><Redirect to='/view-all-books'></Redirect>}></Route>
                            <Route path="/view-all-books" component={ViewAllBooks}></Route>
                            <Route path="/add-a-book" component={AddBook}></Route>
                            <Route path="/contact-us" component={ContactUs}></Route>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}


