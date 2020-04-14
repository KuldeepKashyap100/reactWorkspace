import React from 'react';

const byUsingMethodApproach=(WrappedComponent,passedData)=>{
    //now we return functional component
    return props=>(
        <div className={passedData}>
            <WrappedComponent {...props}/>
        </div>
    );
}
export default byUsingMethodApproach;