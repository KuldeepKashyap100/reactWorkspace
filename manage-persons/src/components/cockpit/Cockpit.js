import React, { useEffect, useRef, useContext } from "react";
import AuthContext from "../context/AuthContext";
const Cockpit = props => {
  console.log("Cockpit rendering...");
  const buttonRef = useRef(null);
  const context = useContext(AuthContext);

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
