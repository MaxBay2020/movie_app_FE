import {Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography} from "@mui/material";
import MyInput from "../../myInput/MyInput";
import MyButton from "../../myButton/MyButton";
import {MyCheckbox, MyLabel} from "../../myCheckbox/MyCheckbox";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginFormSchema} from "../../../utils/schema";
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';

const LoginForm = () => {

    const { t } = useTranslation()

    const {
        register,
        handleSubmit,
        formState: { errors }
    }  = useForm({
        resolver: yupResolver(loginFormSchema),
    })


    const loginUser = userInfo => {
        console.log(userInfo)
    }

    return (
        <Box
            sx={{
                height: '360px'
            }}
        >

            {/* Form */}
            <form onSubmit={handleSubmit(loginUser)} style={{height: '100%'}}>
                <Grid
                    container
                    direction='column'
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: '100%'
                    }}
                >
                    <Grid>
                        <Typography
                            sx={{
                                typography: {
                                    xs: 'h2',
                                    md: 'h1'
                                }
                            }}
                        >
                            {t('loginPage.signIn')}
                        </Typography>
                    </Grid>
                    {/* email input */}
                    <Grid sx={{ width: '100%' }}>
                        <MyInput
                            type="text"
                            placeholder={t('loginPage.email')}
                            {...register('email')}
                            className={errors.email && 'error'}
                        />
                        <Box>
                            {
                                errors.email
                                &&
                                <Typography variant='bodyExtraSmall' color='error'>{errors.email.message}</Typography>
                            }
                        </Box>
                    </Grid>

                    {/* password input */}
                    <Grid sx={{ width: '100%' }}>
                        <MyInput
                            type="password"
                            placeholder={t('loginPage.password')}
                            {...register('password')}
                            className={errors.password && 'error'}
                        />
                        <Box>
                            {
                                errors.password
                                &&
                                <Typography variant='bodyExtraSmall' color='error'>{errors.password.message}</Typography>
                            }
                        </Box>
                    </Grid>


                    {/* checkbox input */}
                    <Grid>
                        <FormGroup>
                            <FormControlLabel 
                                control={<MyCheckbox {...register('rememberMe')} />}
                                label={<MyLabel>{t('loginPage.rememberMe')}</MyLabel>}
                            />
                        </FormGroup>
                    </Grid>


                    {/* button */}
                    <Grid sx={{ width: '100%' }}>
                        <MyButton
                            variant="contained"
                            color='primary'
                            type='submit'
                            sx={{
                                width: '100%',
                                height: '54px'
                            }}
                        >
                            {t('actions.login')}
                        </MyButton>
                    </Grid>

                    {/* register */}
                    <Grid>
                        <Typography variant='bodySmall'>
                            <Link to='/register'>{t('actions.register')}</Link>
                        </Typography>
                    </Grid>
                </Grid>



            </form>
        </Box>
    );
};

export default LoginForm;
