/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const PrivateRoute = ({children}) => {

    // eslint-disable-next-line no-unused-vars
    const {user,loading}=useAuth();
    const location =useLocation();

    if(!user){
        return <Navigate to={"/login"} state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div >
             {/* <Helmet><title>Luxary State | view property</title></Helmet> */}
            {children}
        </div>
    );
};

export default PrivateRoute;