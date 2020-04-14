import React from 'react';
const AuthContext= React.createContext({
    authenticaton:false,
    toggleAuthenticationHandler:()=>{}
});
export default AuthContext;