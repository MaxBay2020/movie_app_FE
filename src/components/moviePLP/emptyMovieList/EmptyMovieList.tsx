import {Grid, Typography} from "@mui/material";
import MyButton from "../../myButton/MyButton";
import {Link} from "react-router-dom";

const EmptyMovieList = () => {
    return (
        <Grid
            container
            direction='column'
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
            }}
            spacing={5}
        >
            <Grid>
                <Typography
                    sx={{
                        typography: {
                            xs: 'h3',
                            md: 'h2'
                        },
                        textAlign: 'center'
                    }}
                >
                    Your movie list is empty
                </Typography>
            </Grid>
            <Grid>
                <MyButton variant="contained" color='primary' sx={{
                    width: {
                        xs: '300px',
                        sm: '380px',
                        md: '202px'
                    },
                    height: '56px'
                }}>
                    <Link to='create'>
                        <Typography variant='bodyRegular'>Add a new movie</Typography>
                    </Link>
                </MyButton>
            </Grid>
        </Grid>
    );
};

export default EmptyMovieList;
