import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export class HelloReact extends Component{
    constructor(){
        super();
        this.text="Hello React!!!"
        this.state={hide:true};
    }
    showHide=()=>{
        this.setState({hide:!this.state.hide});
    }
    render(){
        var text=null;
        if(!this.state.hide)
            text=<h3 className="text-primary">{this.text}</h3>
        return (
            <div>
                <button className="btn btn-success" onClick={this.showHide}>show text</button><br/>
                    {text}<br/>
                <button className="btn btn-danger" onClick={this.showHide}>Hide text</button>
            </div>
        );
    }
}