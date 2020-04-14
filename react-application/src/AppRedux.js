import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class AppRedux extends Component {
    
    state = {userInputAmt:0};
    render() {
        return (<div>
        <div className={'col-5 offset-1 card'}>
            <br/>
            <table>
                <tbody>
                    <tr>
                        <th><h3>Your account has: </h3></th>
                        <td><h3>{'$'+this.props.pAccountBalance}</h3></td>
                    </tr>
                    <tr>
                        <th>Enter the amount for transaction: </th>
                        <td><input onChange={(e)=>{ this.userInputAmt = e.target.value;}} type='number' className={'form-control'}/></td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={()=>{this.props.debit(this.userInputAmt)}} className={'btn btn-primary'}>
                                Debit </button>
                        </td>
                        <td>
                            <button onClick={()=>{this.props.credit(this.userInputAmt)}} className={'btn btn-success'}>
                                Credit </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br/>
        </div>
        </div>);
    }
}
