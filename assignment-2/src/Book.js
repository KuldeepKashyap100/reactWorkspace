import React,{Component} from 'react';

export class Book extends Component{
    constructor(){
        super();
        this.state={hideFlag:true}
    }
    render(){
        var summary=null;
        if(!this.state.hideFlag)
            summary=this.props.selectedBook.summary;
        return (
            <div className="card">
                {this.props.selectedBook.title}<br/>
                <span>Author:</span>
                {this.props.selectedBook.author}<br/>
                <p>{summary}</p><br/>
                <button className='btn btn-success' onClick={()=>{if(this.state.hideFlag) this.setState({hideFlag:!this.state.hideFlag})}}>Show details</button><br/>
                <button className="btn btn-danger" onClick={()=>{if(!this.state.hideFlag) this.setState({hideFlag:!this.state.hideFlag})}}>Hide details</button>
            </div>
        );
    }
}