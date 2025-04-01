import {Grid, Typography} from "@mui/material";
import MyButton from "../../myButton/MyButton";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const EmptyMovieList = () => {

    const { t } = useTranslation()

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
                    {t('moviesPLP.emptyMessage')}
                </Typography>
            </Grid>
            <Grid sx={{ minWidth: '202px' }}>
                <MyButton variant="contained" color='primary' sx={{
                    width: {
                        xs: '300px',
                        sm: '380px',
                        md: '100%'
                    },
                    px: '15px',
                    height: '56px'
                }}>
                    <Link to='create'>
                        <Typography variant='bodyRegular'>{t('actions.addNewMovie')}</Typography>
                    </Link>
                </MyButton>
            </Grid>
        </Grid>
    );
};

export default EmptyMovieList;
