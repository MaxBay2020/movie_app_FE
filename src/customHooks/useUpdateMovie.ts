
import {useMutation} from "@tanstack/react-query";
import api from "../utils/api";

type useUpdateMovieType = {
    onSuccess: (data: any) => void,
    onError: (error: any) => void
}


const useUpdateMovie = ({ onSuccess, onError}: useUpdateMovieType) => {

    const updateMovie = (updatedMovie) => {

        return api.put(`/movies/${updatedMovie.get('movieId')}`, updatedMovie)
    }

    return useMutation({
        mutationFn: updateMovie,
        onSuccess,
        onError
    })
};

export default useUpdateMovie;

