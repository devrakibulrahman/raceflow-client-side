import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivatePage = ({children}) => {

    //? context declare here ---------------------->
    const {user} = useContext(AuthContext);

    //? hooks declare here ------------------------>
    const location = useLocation();
    console.log(location);

    if(user || user?.email){
        return children;
    };

    return <Navigate to={'/auth/login'} state={location?.pathname || '/'}></Navigate>
};

PrivatePage.propTypes = {
    children: PropTypes.node,
};

export default PrivatePage;