import React from 'react';
import {Route,Redirect,withRouter} from 'react-router-dom';
class EmployeeDetails extends React.Component{
    constructor(){
        super();
    }
    editEmployee=(employeeID)=>{
        this.props.history.push('/add-employee/'+employeeID);
    }
    render(){
        return(
            <div>
                 <div className="display-4 font-weight-bold d-flex justify-content-center text-primary">Employee details</div>
                 <div>
                     {this.props.employeeData.map(({employeePicture,employeeID,employeeName,employeeAge,employeeSalary,employeeAchievments})=>{
                         return (
                             <div key={employeeID} className="box">
                                 <img src={'./images/'+employeePicture+'.jpg'}></img>
                                 <div className="d-flex justify-content-center font-weight-bold">{employeeName}</div>
                                 <div>
                                    <span>Employee Id:&nbsp;</span>
                                    <span>{employeeID}</span>
                                 </div>
                                 <div>
                                    <span>Age:&nbsp;</span>
                                    <span>{employeeAge}</span>
                                 </div>
                                 <div>
                                    <span>Salary:&nbsp;</span>
                                    <span>{employeeSalary}</span>
                                 </div>
                                 <div className="d-flex justify-content-center">
                                     <button className="btn btn-primary" onClick={()=>this.editEmployee(employeeID)}>Edit</button>
                                     <button className="btn btn-success ml-1" >View</button>
                                 </div>
                             </div>
                         );
                     })}
                 </div>
            </div>
        );
    }
}

export default withRouter(EmployeeDetails);