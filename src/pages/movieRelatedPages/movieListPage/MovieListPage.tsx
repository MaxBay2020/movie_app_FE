import {Grid} from "@mui/material";
import EmptyMovieList from "../../../components/moviePLP/emptyMovieList/EmptyMovieList";
import {moviesDummyData} from "../../../data/data";
import {movieType} from "../../../utils/types";
import MovieList from "../../../components/moviePLP/movieList/MovieList";
import useQueryAllMovies from "../../../customHooks/useQueryAllMovies";
import {defaultLimit, Message} from "../../../utils/helper";
import {Slide, toast} from "react-toastify";
import {useTranslation} from "react-i18next";
import {useState} from "react";

const MovieListPage = () => {

    const { t } = useTranslation()
    const [page, setPage] = useState<number>(1)

    const onError = (res) => {
        console.log(res)
        const translate = Message[res.response?.data?.message]

        toast.error(t(translate), {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        })
    }

    const { data, isFetching, isSuccess, error } = useQueryAllMovies({
        queryKey: 'queryAllMovies',
        page,
        limit: defaultLimit,
        onError
    })

    console.log(error)


    return (
        <Grid
            container
            direction='column'
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
            }}
        >
            {/* when no movie in db */}
            {
                isSuccess && !(data?.data.movies?.length)
                &&
                <Grid>
                    <EmptyMovieList />
                </Grid>
            }

            {/* movie list */}
            <Grid sx={{ width: '100%' }}>
                <MovieList
                    movieList={data?.data.movies}
                    total={data?.data.total}
                    isFetching={isFetching}
                    page={page}
                    setPage={setPage}
                />
            </Grid>

        </Grid>
    );
};

export default MovieListPage;
