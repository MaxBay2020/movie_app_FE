
import {useMutation} from "@tanstack/react-query";
import api from "../utils/api";

type useLogoutType = {
    onSuccess: (data: any) => void,
    onError: (error: any) => void
}


const useLogout = ({ onSuccess, onError}: useLogoutType) => {

    const logoutUser = () => {
        return api.get('/auth/logout')
    }

    return useMutation({
        mutationFn: logoutUser,
        onSuccess,
        onError
    })
};

export default useLogout;
