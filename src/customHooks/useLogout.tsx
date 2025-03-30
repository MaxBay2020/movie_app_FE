import axios from "axios";
import {useMutation} from "@tanstack/react-query";
import api from "../utils/api";

type useLogoutType = {
    onSuccess: (data: any) => void,
    onError: (error: any) => void
}


const useLogout = ({ onSuccess, onError}: useLogoutType) => {

    const loginUser = user => {
        return api.get('/auth/logout', user)
    }

    return useMutation({
        mutationFn: loginUser,
        onSuccess,
        onError
    })
};

export default useLogout;
