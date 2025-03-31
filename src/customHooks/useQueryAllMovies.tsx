import api from "../utils/api";
import {defaultLimit, staleTime} from "../utils/helper";
import {useQuery} from "@tanstack/react-query";
import {movieType} from "../utils/types";

type useQueryAllMoviesType = {
    queryKey: unknown,
    page: number,
    limit: number,
    onError: (e: any) => boolean
}

type QueryAllMoviesResponseType = {
    total: number,
    movies: movieType[]
}

const useQueryAllMovies = ({queryKey, page = 1, limit = defaultLimit, onError}: useQueryAllMoviesType) => {
    const queryAllMovies = async (): Promise<QueryAllMoviesResponseType> => {
        const res = await api.get('/movies', {
            params: {
                page,
                limit,
            }
        })

        return res.data
    }

    return useQuery<QueryAllMoviesResponseType>({
        queryKey: [queryKey, page, limit],
        queryFn: queryAllMovies,
        staleTime,
        throwOnError: onError
    })

};

export default useQueryAllMovies;
