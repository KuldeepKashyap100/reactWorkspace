import React,{Component} from 'react'
export class PhoneDetails extends Component{
    render(){
        return(
            <div className="card">
                <div>{this.props.model.modelName}</div>
                <div>{this.props.model.price}</div>
                <div>{this.props.model.ram}</div>
                <div>{this.props.model.camera}</div>
                <div>{this.props.model.os}</div>
                <div>{this.props.model.processor}</div>
            </div>
            );
    }
}