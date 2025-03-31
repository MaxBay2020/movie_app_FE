import api from "../utils/api";
import {staleTime} from "../utils/helper";
import {useQuery} from "@tanstack/react-query";

type useQueryMovieByMovieIdType = {
    queryKey: unknown[],
    movieId: string,
    onError: (e: any) => void
}

const useQueryMovieByMovieId = ({queryKey, movieId, onError}: useQueryMovieByMovieIdType) => {

    const queryMovieByMovieId = async () => {
        return api.get(`/movies/${movieId}`)
    }

    return useQuery({
        queryKey,
        queryFn: queryMovieByMovieId,
        staleTime,

        throwOnError: onError
    })

};

export default useQueryMovieByMovieId;
