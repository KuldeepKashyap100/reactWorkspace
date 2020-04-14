import React from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import EmployeeDetails from './employee-details';
import AddEmployee from './add-employee';
import Home from './home';
import _ from 'lodash';
export class LandingComponent extends React.Component{
    constructor(){
        super();
        this.routes=[
            {
                route:'/'
            },
            {
                route:'/home',
                component:Home
            },
            {
                route:'/employee-details',
                component:EmployeeDetails
            },
            {
                route:'/add-employee/:employeeID',
                component:AddEmployee
            }
        ]
    }
    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-light text-primary">
                    <div className="nav-header">
                        <a className="nav-brand font-weight-bold">HR System</a>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="/home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/employee-details">Employee Details</a></li>
                        <li className="nav-item"><a className="nav-link" href="/add-employee">Add Employee</a></li>
                    </ul>
                </nav>
                <div>
                    <BrowserRouter>
                        <Switch>
                            {_.map(this.routes,({route,component:DynamicallyLoadedComponent})=>{
                                if(route=='/')
                                    return <Route exact key={route} path={route} render={_=><Redirect to='/home'/>}></Route>
                                return <Route key={route} path={route} render={_=><DynamicallyLoadedComponent urlData={_} employeeData={this.props.employeeData}></DynamicallyLoadedComponent>}></Route>
                            })}
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}