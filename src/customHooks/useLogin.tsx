import {useMutation} from "@tanstack/react-query";
import api from "../utils/api";
import {userType} from "../utils/types";

type useLoginType = {
    onSuccess: (data: any) => void,
    onError: (error: any) => void
}


const useLogin = ({ onSuccess, onError}: useLoginType) => {

    const loginUser = (user: userType) => {
        return api.post('/auth/login', user)
    }

    return useMutation({
        mutationFn: loginUser,
        onSuccess,
        onError
    })
};

export default useLogin;
