import React from 'react';
export class ViewAllBooks extends React.Component{
    render(){
        return (
            <div>
                <h1 className="text-success">Keed checking new books added every week</h1>
                <img src='./logo192.png'></img>
                <img src={require('./logo512.png')}></img>
            </div>
        );
    }
}