import React, { Component } from "react";
import * as actionTypes from "../../store/actions";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionCreators from "../../store/actions";
import { connect } from "react-redux";

class Counter extends Component {
  state = {
    counter: 0
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.count} />
        <CounterControl label="Increment" clicked={this.props.incrementCount} />
        <CounterControl label="Decrement" clicked={this.props.decrementCount} />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.addSubtractFive(5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.addSubtractFive(-5)}
        />
        <hr />
        <button onClick={() => this.props.storeResult(this.props.count)}>
          Store Result
        </button>
        <ul>
          {this.props.result.map((item, index) => (
            <li key={index} onClick={() => this.props.deleteResult(index)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter,
    result: state.result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCount: () => dispatch(actionCreators.increment()),
    decrementCount: () => dispatch(actionCreators.decrement()),
    addSubtractFive: value => dispatch(actionCreators.addSubtractFive(value)),
    storeResult: countValue => dispatch(actionCreators.storeResult(countValue)),
    deleteResult: index => dispatch(actionCreators.deleteResult(index))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
