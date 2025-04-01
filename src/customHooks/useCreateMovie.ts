
import {useMutation} from "@tanstack/react-query";
import api from "../utils/api";

type useUploadFileType = {
    onSuccess: (data: any) => void,
    onError: (error: any) => void
}


const useCreateMovie = ({ onSuccess, onError}: useUploadFileType) => {

    const createMovie = (newMovie: any) => {
        return api.post('/movies', newMovie)
    }

    return useMutation({
        mutationFn: createMovie,
        onSuccess,
        onError
    })
};

export default useCreateMovie;

