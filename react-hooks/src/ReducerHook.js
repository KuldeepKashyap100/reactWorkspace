import React, { useEffect, useReducer, useState, useContext } from 'react';

const initialState = {message: "Hii"};
const reducer = (state, action) => {
  switch (action.type) {
    case "yell":
      return {message: `Hey, i just said ${state.message}`}
    case "whisper":
      return {message: `excuse me, i just said ${state.message}`}
  }
}

function ReducerHook() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      console.log("making requests");
      fetch("https://api.github.com/users")
      .then(res => res.json())
      .then(setUsers);
    }, []);
  
    const [number, setNumber] = useReducer((oldNumber, newNumber) => oldNumber + newNumber, 0);
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <>
        {/* {users.map(user => <h3>{user.login}</h3>)} */}
        <h1 onClick={() => setNumber(1)}>{number}</h1>
        <h1>{"message: " + state.message}</h1>
        <button onClick={() => dispatch({type: "yell"})}>Yell</button>
        <button onClick={() => dispatch({type: "whisper"})}>Whisper</button>
  
        <br/>
        <br/>
        <br/>
  
      </>
    );
  }
  