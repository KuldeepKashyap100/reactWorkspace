import React from 'react';
export class SelectedBook extends React.Component{
    render(){
        debugger;
        return (
            <div>
                <h1>The Selected Book is {this.props.match.params.cardId}</h1>
            </div>
        );
    }
}