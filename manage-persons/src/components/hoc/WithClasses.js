import React from 'react';
const WithClasses=props=>{
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}
export default WithClasses;