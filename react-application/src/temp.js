import React from 'react';
export class tempComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>temporary Component</h1>
                {this.props.match.params.username}
            </div>
        );
    }
}