import { useState, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import AuthContext from './authContext';
import api from '../api';

const getToken = () => localStorage.getItem('userId');
api.setTokenGetter(getToken);

const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(getToken() != null);
    
    const logIn = () => setLoggedIn(true);
    const logOut = () => {
        localStorage.removeItem('userId');
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{loggedIn, logIn, logOut}}>
            {children}
        </AuthContext.Provider>
    );
};

const PrivateRoute = ({ children }) => {
    const auth = useContext(AuthContext);
    const location = useLocation();

    return auth.loggedIn ? children : <Navigate to="/login" state={{ from: location }} />;
};

export { PrivateRoute };

export default AuthProvider;