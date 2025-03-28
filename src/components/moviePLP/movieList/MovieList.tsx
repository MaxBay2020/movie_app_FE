import {movieType} from "../../../utils/types";
import {Container, Grid, IconButton, Typography} from "@mui/material";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {Link} from "react-router-dom";
import MovieCard from "../../movieCard/MovieCard";
import MyPagination from "../../pagination/Pagination";
import {useState} from "react";

type MovieListPropsType = {
    movieList: movieType[]
}

const MovieList = ({movieList}: MovieListPropsType) => {

    const [page, setPage] = useState<number>(1)


    const logoutUser = () => {
        console.log('logoutUser')
    }

    const changePage = (_e, newPage) => {
        setPage(newPage)
    }

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
                                My movies
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
                                Logout
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
                            justifyContent: 'space-between',
                        }}
                        spacing={{
                            xs: 5,
                            md: 3
                        }}
                    >
                        {
                            movieList.map(({ id, title, publishingYear, imageUrl }) => (
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
                        }

                    </Grid>
                </Grid>

                {/* pagination */}
                <Grid>
                    <MyPagination
                        count={10}
                        page={page}
                        onChange={(e, value) => changePage(e, value)}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default MovieList;
