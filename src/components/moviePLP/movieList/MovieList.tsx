import {movieType} from "../../../utils/types";
import {Container, Grid, IconButton, Skeleton, Typography} from "@mui/material";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {Link} from "react-router-dom";
import MovieCard from "../../movieCard/MovieCard";
import MyPagination from "../../pagination/Pagination";
import {Dispatch, SetStateAction, useState} from "react";
import {useTranslation} from "react-i18next";

type MovieListPropsType = {
    movieList: movieType[],
    total: number,
    isFetching: boolean,
    page: number,
    setPage: Dispatch<SetStateAction<number>>
}

const MovieList = ({movieList, total, isFetching, page, setPage}: MovieListPropsType) => {

    const  { t } = useTranslation()



    const logoutUser = () => {
        console.log('logoutUser')
    }

    const changePage = (_e, newPage) => {
        setPage(newPage)
    }

    const renderMovieListSkeleton = () => (
        Array.from(new Array(4)).map((item, index) => (
            <Grid key={index} size={{ xs: 6, md: 3 }}>
                <Skeleton
                    variant="rectangular"
                    sx={(theme) => ({
                        width: '100%',
                        height: {
                            xs: '334px',
                            md: '504px'
                        },
                        borderRadius: '12px',
                        backgroundColor: theme.palette.cardColor.main,
                    })}
                />
            </Grid>

        ))
    )

    const renderMovieList = () => (
        movieList?.map(({ id, title, publishingYear, imageUrl }) => (
            <Grid key={id} size={{ xs: 6, md: 3 }}>
                <Link to={`edit/${id}`}>
                    <MovieCard
                        title={title}
                        publishingYear={publishingYear}
                        imageUrl={imageUrl}
                        id={id}
                    />
                </Link>
            </Grid>
        ))
    )

    const renderPaginationSkeleton = () => (
        <Skeleton
            variant="rectangular"
            sx={(theme) => ({
                minWidth: '200px',
                height: '32px',
                borderRadius: '12px',
                backgroundColor: theme.palette.cardColor.main,
            })}
        />
    )

    return (
        <>
            <Grid
                container
                direction='column'
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    pt: {
                        xs: 10,
                        md: 15
                    },
                    pb: {
                        xs: '205px',
                        md: '220px'
                    }
                }}
                spacing={{
                    xs: 10,
                    md: 15
                }}
            >
                {/* title bar */}
                <Grid sx={{ width: '100%'}}>
                    <Grid
                        container
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >

                        <Grid>
                            <Typography
                                sx={{
                                    typography: {
                                       xs: 'h3',
                                        md: 'h2'
                                    }
                                }}
                            >
                                {t('moviesPLP.myMovies')}
                                <Link to='create'>
                                    <IconButton>
                                        <AddCircleOutlineOutlinedIcon />
                                    </IconButton>
                                </Link>
                            </Typography>
                        </Grid>

                        <Grid onClick={() => logoutUser()}>
                            <Typography variant='bodyRegular' sx={{
                                display: {
                                    xs: 'none',
                                    md: 'inline-block'
                                },
                                cursor: 'pointer'
                            }}>
                                {t('actions.logout')}
                            </Typography>
                            <IconButton>
                                <LogoutOutlinedIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>

                {/* movie list display */}
                <Grid sx={{ width: '100%'}}>
                    <Grid
                        container
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                        }}
                        spacing={{
                            xs: 5,
                            md: 3
                        }}
                    >
                        { isFetching ? renderMovieListSkeleton() : renderMovieList() }

                    </Grid>
                </Grid>

                {/* pagination */}
                <Grid>
                    {
                        isFetching ?
                            renderPaginationSkeleton()
                            :
                            <MyPagination
                                count={total}
                                page={page}
                                onChange={(e, value) => changePage(e, value)}
                            />
                    }

                </Grid>
            </Grid>
        </>
    );
};

export default MovieList;
