import {Grid, IconButton, Typography} from "@mui/material";
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
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
                <Grid
                    container
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                    spacing={2}
                >
                    <Grid>
                        <Link to='/movies'>
                            <IconButton>
                                <KeyboardReturnOutlinedIcon
                                    sx={{
                                        fontSize: {
                                            xs: 'medium',
                                            md: '48px'
                                        }
                                    }}
                                />
                            </IconButton>
                        </Link>
                    </Grid>

                    <Grid>
                        <Typography
                            sx={{
                                typography: {
                                    xs: 'h5',
                                    md: 'h2'
                                },
                                textAlign: 'center'
                            }}
                        >
                            Oops! 404 - not found. 😿
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>


        </Grid>
    );
};

export default NotFoundPage;
