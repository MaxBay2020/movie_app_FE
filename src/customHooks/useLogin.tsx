import axios from "axios";
import {useMutation} from "@tanstack/react-query";
import api from "../utils/api";

type useLoginType = {
    onSuccess: () => void,
    onError: () => void
}


const useLogin = ({ onSuccess, onError}: useLoginType) => {

    const loginUser = user => {
        return api.post('/auth/login', user)
    }

    return useMutation({
        mutationFn: loginUser,
        onSuccess,
        onError
    })
};

export default useLogin;
