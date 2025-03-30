import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const login = localStorage.getItem('login')


    return JSON.parse(login) ? <Outlet /> : <Navigate to='/login' replace />
};

export default PrivateRoute;
