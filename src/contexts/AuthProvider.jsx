import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const user = {
        name: "Rakibul Rahman",
    };

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export {AuthContext, AuthProvider};