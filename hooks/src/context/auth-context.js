import React, {useState} from "react";

export const AuthContext = React.createContext({
   login: false,
   loginHandler: () => {}
});

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const loginHandler = () => setIsAuthenticated(true);

    return (
        <AuthContext.Provider value={{login: loginHandler, isAuthenticated: isAuthenticated}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;