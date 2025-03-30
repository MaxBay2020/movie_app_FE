
import axios from "axios";
import {useMutation} from "@tanstack/react-query";
import api from "../utils/api";

type useUploadFileType = {
    onSuccess: (data: any) => void,
    onError: (error: any) => void
}


const useUploadFile = ({ onSuccess, onError}: useUploadFileType) => {

    const loginUser = newMovie => {
        return api.post('/movies', newMovie)
    }

    return useMutation({
        mutationFn: loginUser,
        onSuccess,
        onError
    })
};

export default useUploadFile;

