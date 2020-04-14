import React from 'react';
const ValidationComponent=props=>{
    var testOutput=null;
    if(props.textLength<5)
        testOutput=<div>text too short</div>
    else if(props.textLength>10)
        testOutput=<div>text too long</div>
    return testOutput;
}
export default ValidationComponent;