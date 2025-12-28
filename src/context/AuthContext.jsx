import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const login = () =>{
        setIsAuthenticated(true);
    }

    return (
        <AuthContext.Provider value = {{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>

    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error('useAuth must be used within Authprovider');
    }
    return context;
}