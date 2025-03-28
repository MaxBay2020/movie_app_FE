import {Container, Grid} from "@mui/material";
import EmptyMovieList from "../../../components/moviePLP/emptyMovieList/EmptyMovieList";
import LoginForm from "../../../components/auth/loginForm/LoginForm";

const MovieListPage = () => {
    return (
        <Grid
            container
            direction='column'
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100vh'
            }}
        >
            <Grid>
                <EmptyMovieList />
            </Grid>
        </Grid>
    );
};

export default MovieListPage;
