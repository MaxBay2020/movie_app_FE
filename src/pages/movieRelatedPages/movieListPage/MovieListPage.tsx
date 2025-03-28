import {Grid} from "@mui/material";
import EmptyMovieList from "../../../components/moviePLP/emptyMovieList/EmptyMovieList";
import {moviesDummyData} from "../../../data/data";
import {movieType} from "../../../utils/types";
import MovieList from "../../../components/moviePLP/movieList/MovieList";

const MovieListPage = () => {

    const movieList: movieType[] = moviesDummyData


    return (
        <Grid
            container
            direction='column'
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                // height: '100vh'
            }}
        >
            {/* when no movie in db */}
            {
                !movieList.length
                &&
                <Grid>
                    <EmptyMovieList />
                </Grid>
            }

            {/* movie list */}
            <Grid sx={{ width: '100%' }}>
                <MovieList
                    movieList={movieList}
                />
            </Grid>

        </Grid>
    );
};

export default MovieListPage;
