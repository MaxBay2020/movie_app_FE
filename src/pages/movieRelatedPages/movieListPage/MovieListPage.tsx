import {Grid} from "@mui/material";
import EmptyMovieList from "../../../components/moviePLP/emptyMovieList/EmptyMovieList";
import {moviesDummyData} from "../../../data/data";
import {movieType} from "../../../utils/types";
import MovieList from "../../../components/moviePLP/movieList/MovieList";
import useQueryAllMovies from "../../../customHooks/useQueryAllMovies";
import {defaultLimit, Message, StatusCode} from "../../../utils/helper";
import {Slide, toast} from "react-toastify";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {userLogout} from "../../../features/authFeatures/userSlice";
import useLogout from "../../../customHooks/useLogout";
import {useQueryClient} from "@tanstack/react-query";

const MovieListPage = () => {

    const { t } = useTranslation()
    const [page, setPage] = useState<number>(1)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const queryClient = useQueryClient()


    const onError = (res) => {

        const statusCode = res.response.status

        if(statusCode === StatusCode.E401){
            logoutUser()
            dispatch(userLogout())
            // token not valid, redirect user to login page
            navigate('/login')
        }

        const translate = Message[res.response?.data?.message]

        if(toast.isActive(t(translate))){
            return
        }
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
            toastId: t(translate)
        })
    }

    const {mutate: logoutUser} = useLogout({
        onSuccess: () => {},
        onError: () => {}
    })


    const { data, isFetching, isSuccess } = useQueryAllMovies({
        queryKey: 'queryAllMovies',
        page,
        limit: defaultLimit,
        onError
    })

    useEffect(() => {
        const success = new URLSearchParams(window.location.search).get("success");
        if (success) {
            queryClient.invalidateQueries({ queryKey: ["queryAllMovies"] })
        }
    }, [])


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
