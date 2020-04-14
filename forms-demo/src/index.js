import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {LandingComponent} from './components/landing-component';
import 'bootstrap/dist/css/bootstrap.min.css';
//import axios from 'axios';
import {createStore} from 'redux';


//var store=createStore()
// var employeeData;
// axios.get('./employee.json').then((response)=>{
//     employeeData=response.data;
// }).catch((error)=>{
//     console.log(error);
// })
var employeeData=[
    {
      "employeeID": 101,
      "employeeName": "Claire",
      "achievements": "Has got 3 bravo awards",
      "employeeSalary": 50000,
      "employeeAge": 30,
      "image": "emp1.png"
    },
    {
      "employeeID": 102,
      "employeeName": "Benny",
      "achievements": "JavaScript expert",
      "employeeSalary": 150000,
      "employeeAge": 29,
      "image": "img9.png"
    }
  ];  
ReactDOM.render(<LandingComponent employeeData={employeeData} />, document.getElementById('root'));
