import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import {PhoneDetails} from './phoneDetails';
export class PhoneCatalog extends Component{
    constructor(){
        super();
        this.phoneModels=[
            {modelName:'Google pixel 2 XL',price:62000,ram:'4gb',camera:'12.2 mp',os:'Android pie',processor:'snapdragon 835 octa-core'},
            {modelName:'Apple iphone XL',price:98000,ram:'3gb',camera:'12 mp',os:'Ios 11.11',processor:'A11 Bionic Hexacore'}
        ]
    }
    viewDetails(index){
        ReactDOM.render(<PhoneDetails model={this.phoneModels[index]}></PhoneDetails>,document.getElementById('root'));
    }
    render(){
        return(
            <div>
                {this.phoneModels.map((_,index)=>{
                    return (
                        <div className="card" key={index}>
                            <div>{_.modelName}</div>
                            <div>{_.price}</div>
                            <button className="btn btn-primary" onClick={()=>{this.viewDetails(index)}}>View Details</button>
                        </div>
                    );
                })}
            </div>
        );
    }
}