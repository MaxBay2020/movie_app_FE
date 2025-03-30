import api from "../utils/api";
import {defaultLimit, staleTime} from "../utils/helper";
import {useQuery} from "@tanstack/react-query";

type useQueryAllMoviesType = {
    queryKey: unknown[],
    page: number,
    limit: number,
    onError: (e: any) => void
}

const useQueryAllMovies = ({queryKey, page = 1, limit = defaultLimit, onError}: useQueryAllMoviesType) => {
    const queryAllMovies = async () => {
        return api.get('/movies', {
            params: {
                page,
                limit,
            }
        })
    }

    return useQuery({
        queryKey: [queryKey, page, limit],
        queryFn: queryAllMovies,
        staleTime,

        throwOnError: onError
    })

};

export default useQueryAllMovies;
