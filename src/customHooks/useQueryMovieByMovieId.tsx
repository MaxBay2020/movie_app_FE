import api from "../utils/api";
import {staleTime} from "../utils/helper";
import {useQuery} from "@tanstack/react-query";

type useQueryMovieByMovieIdType = {
    queryKey: unknown,
    movieId: string,
    onError: (e: any) => boolean
}

const useQueryMovieByMovieId = ({queryKey, movieId, onError}: useQueryMovieByMovieIdType) => {

    const queryMovieByMovieId = async () => {
        const res = await api.get(`/movies/${movieId}`)
        return res.data
    }

    return useQuery({
        queryKey: [queryKey, movieId],
        queryFn: queryMovieByMovieId,
        staleTime,

        throwOnError: onError
    })

};

export default useQueryMovieByMovieId;
