import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';

const courseCatalog=[
    {courseName:"PHP",category:"Server Scripting",author:"Richard James"},
    {courseName:"Angular 6",category:"Web Development",author:"Kirk Hamett"},
    {courseName:"Node.js",category:"Server Side Js",author:"Rayn Dalh"},
    {courseName:"Bootstrap",category:"UI Development",author:"Mark Hill"},
    {courseName:"Python",category:"Programming",author:"Guido van rossum"}
];
function kk(){
    var tableData=courseCatalog.map(_=>{
        return (<tr onClick={getDetails} key={_.courseName} data-index={_.courseName}>
                    <td>{_.courseName}</td>
                    <td>{_.category}</td>
                    <td>{_.author}</td>
                </tr>)
    });
    return (
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Category</th>
                    <th>Author</th>
                </tr>
            </thead>
            <tbody>
                {tableData}
            </tbody>
        </table>
    );
}
function getDetails(e){
    console.log(e.currentTarget.getAttribute('data-index'));
    var selectedItem=_.find(courseCatalog,_=>{
        if(_.courseName===e.currentTarget.getAttribute('data-index')){
            return _;
        }
    })
    var bookDetails=<div>
        <div className="heading">Featured Courses</div>
        <div className="card">
            <div style={{textAlign:"center",fontWeight:"bold"}}>{selectedItem.courseName}</div>
            <div>
                <span>Author:</span>&nbsp;<span>{selectedItem.author}</span>
            </div>
            <div>
                <span>Category:</span>&nbsp;<span>{selectedItem.category}</span>
            </div>
            <button style={{height:'40px',width:'100px'}} className="btn btn-success">Summary</button>
        </div>
    </div>;
    ReactDOM.render(bookDetails,document.getElementById('root'));
}
ReactDOM.render(kk(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// class B{
//     arrow=()=>{
//         console.log(this);
//     }
//     notArrow(){
//         console.log(this);
//     }
// }