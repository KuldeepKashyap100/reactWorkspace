import React from 'react';
import _ from 'lodash';
import {withRouter} from 'react-router-dom'
class AddEmployee extends React.Component{
    constructor(props){
        super(props);
        this.employeeID=this.props.urlData.match.params.employeeID;
        var employeeObject=_.find(this.props.employeeData,_=>{
            if(_.employeeID==this.employeeID)
                return _;
        })
        this.state={
            employeeObject:employeeObject,
            formErrors:{},
            formValid:false
        }
    }
    changeDataInField=(event)=>{
        switch(event.currentTarget.id){
            case "empName":
                //this.setState({'employeeObject.employeeName':event.currentTarget.value});
                this.state.employeeObject.employeeName=event.currentTarget.value;
                if( this.state.employeeObject.employeeName.length<6)
                    this.state.formErrors.empNameError="Name length must be greater than 6";
                else
                    delete this.state.formErrors['empNameError'];
                this.setState({"employeeObject":this.state.employeeObject});
                break;
            case "empAge":
                this.state.employeeObject.employeeAge=event.currentTarget.value;
                if(this.state.employeeObject.employeeAge<18)
                    this.state.formErrors.empAgeError="Age must be greater than 18";
                else
                    delete this.state.formErrors['empAgeError'];
                this.setState({'employeeObject':this.state.employeeObject});
                break;
            case "empSalary":
                this.state.employeeObject=event.currentTarget.value;
                //this.setState({'employeeObject':this.state.employeeObject});
        }
    }
    validations=(event)=>{
        if(Object.keys(this.state.formErrors)>0){
            event.preventDefault();
        }
        else{
            this.setState({'employeeObject':this.state.employeeObject});
            this.props.history.push('/employee-details');
        }
    }
    render(){
        return(
            <div>
               <div className="d-flex justify-content-center font-weight-bold display-5">The selected ID is {this.employeeID}</div>
               <form className="flex justify-content-center" onSubmit={this.validations}>
                   <div className="form-group">
                       <label for="empId" className="font-weight-bold">Employee ID:</label>
                       <input id="empId" className="form-control disabled" type="text" value={this.state.employeeObject.employeeID} disabled="disabled"></input>
                   </div>
                   <div className="form-group">
                       <label for="empName" className="font-weight-bold">Name:</label>
                       <input id="empName" className="form-control" type="text" value={this.state.employeeObject.employeeName} onChange={this.changeDataInField}></input>
                       <span className="text-danger">{this.state.formErrors.empNameError}</span>
                   </div>
                   <div className="form-group">
                       <label for="empAge" className="font-weight-bold">Age:</label>
                       <input id="empAge" className="form-control" type="text" value={this.state.employeeObject.employeeAge} onChange={this.changeDataInField}></input>
                       <span className="text-danger">{this.state.formErrors.empAgeError}</span>
                   </div>
                   <div className="form-group">
                       <label for="empSalary" className="font-weight-bold">Salary:</label>
                       <input id="empSalary" className="form-control" type="text" value={this.state.employeeObject.employeeSalary}></input>
                   </div>
                   <div className="form-group">
                       <label for="empAchievements" className="font-weight-bold">Achievements</label>
                       <textarea id="empAchievements" className="form-control" value={this.state.employeeObject.employeeAchievments}></textarea>
                   </div>
                   <div>
                       <button id="empUpdate" type="submit" className="btn btn-success">Update</button>
                   </div>
               </form>
            </div>
        );
    }
}

export default withRouter(AddEmployee);