import { Navigate, Outlet } from "react-router-dom";
import {useAppSelector} from "../redux/hooks";

const PrivateRoute = () => {
    const { isLoggedIn } = useAppSelector(state => state.auth)


    return isLoggedIn ? <Outlet /> : <Navigate to='/login' replace />
};

export default PrivateRoute;
