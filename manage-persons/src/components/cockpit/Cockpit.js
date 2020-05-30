import React, { useEffect, useRef, useContext,useState } from "react";
import AuthContext from "../context/AuthContext";
const Cockpit = props => {
  console.log("Cockpit rendering...");
  const buttonRef = useRef(null);
  const context = useContext(AuthContext);
  const [count, setCount] = useState(0);
  // What do we pass to useState as an argument? The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable. (If we wanted to store two different values in state, we would call useState() twice.)

  //runs on every render
  useEffect(() => {
    console.log("Cockpit.js runs on every update");
    return () => {
      console.log("[Cockpit.js] cleanup work on every update");
    };
  });

  //works as componentDidMount
  useEffect(
    () => {
      console.log("Cockpit.js useEffect componentDidMount case");
      setTimeout(() => {
        //alert('Saved data to cloud');
      }, 500);

      buttonRef.current.click();

      //for clean up work we can return a callback that will work as componentWillUnmount
      return () => {
        console.log("Cockpit.js ComponentWillUnmount case");
      };
    },
    [
      /* It has no dependency so useEffect will run only first time*/
    ]
  );

  //works as componentDidUpdate
  useEffect(() => {
    console.log("Cockpit.js useEffect componentDidUpdate case");
    setTimeout(() => {
      //alert('Saved data to cloud');
    }, 500);
  }, [props.personArray]);

  return (
    <div>
      <h1>{props.title}</h1>
      <div>This is really working</div>
      <button onClick={props.togglePersonsHandler} ref={buttonRef}>
        Toggle button
      </button>
      <h3>Persons length : {props.personArray.length}</h3>
      {/* <AuthContext.Consumer>
        {context => (
          <button onClick={context.toggleAuthenticationHandler}>
            Toggle authentication
          </button>
        )}
      </AuthContext.Consumer> */}
      <button onClick={context.toggleAuthenticationHandler}>
        Toggle authentication
      </button>
    </div>
  );
};
//React.memo saves the snapshot of this component and only if its input changes it rerender it.
export default React.memo(Cockpit);
