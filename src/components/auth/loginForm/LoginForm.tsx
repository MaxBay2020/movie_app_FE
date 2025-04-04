import {Box, CircularProgress, FormControlLabel, FormGroup, Grid, Typography} from "@mui/material";
import MyInput from "../../myInput/MyInput";
import MyButton from "../../myButton/MyButton";
import {MyCheckbox, MyLabel} from "../../myCheckbox/MyCheckbox";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginFormSchema} from "../../../utils/schema";
import {Link, useNavigate} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import useLogin from "../../../customHooks/useLogin";

import {Slide, toast} from "react-toastify";
import {Message} from "../../../utils/helper";
import {userLogin} from "../../../features/authFeatures/userSlice";
import {useAppDispatch} from "../../../redux/hooks";
import {userType} from "../../../utils/types";
import {useQueryClient} from "@tanstack/react-query";

const LoginForm = () => {

    const { t } = useTranslation()

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const queryClient = useQueryClient()

    const onLoginSuccess = () => {
        dispatch(userLogin({
            isLoggedIn: true,
        }))
        navigate('/movies')
    }

    const onLoginError = (res: any) => {

        const translate = Message[res.response.data.message as keyof typeof Message]

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



    const { mutate: loginUser, isPending } = useLogin({
        onSuccess: onLoginSuccess,
        onError: onLoginError,
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    }  = useForm({
        resolver: yupResolver(loginFormSchema),
    })



    const handleLoginUser = (userInfo: userType) => {
        const { email, password, rememberMe } = userInfo

        loginUser({ email, password, rememberMe })
        queryClient.invalidateQueries({ queryKey: ["queryAllMovies"] })
    }

    return (
        <Box
            sx={{
                height: '360px'
            }}
        >

            {/* Form */}
            <form onSubmit={handleSubmit(handleLoginUser)} style={{height: '100%'}}>
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
                            disabled={isPending}
                            type="text"
                            placeholder={t('loginPage.email')}
                            {...register('email')}
                            className={errors.email && 'error'}
                            sx={(theme) => ({
                                backgroundColor:  isPending ? theme.palette.bgColor.dark : undefined,
                                color: isPending ? theme.palette.bgColor.light : undefined,
                            })}
                        />
                        <Box>
                            {
                                errors.email
                                &&
                                <Typography variant='bodyExtraSmall' color='error'>{t(errors.email.message ?? 'otherErrors')}</Typography>
                            }
                        </Box>
                    </Grid>

                    {/* password input */}
                    <Grid sx={{ width: '100%' }}>
                        <MyInput
                            disabled={isPending}
                            type="password"
                            placeholder={t('loginPage.password')}
                            {...register('password')}
                            className={errors.password && 'error'}
                            sx={(theme) => ({
                                backgroundColor:  isPending ? theme.palette.bgColor.dark : undefined,
                                color: isPending ? theme.palette.bgColor.light : undefined,
                            })}
                        />
                        <Box>
                            {
                                errors.password
                                &&
                                <Typography variant='bodyExtraSmall' color='error'>{t(errors.password.message ?? 'otherErrors')}</Typography>
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
                            disabled={isPending}
                            variant="contained"
                            color='primary'
                            type='submit'
                            sx={(theme) => ({
                                width: '100%',
                                height: '54px',
                                cursor: isPending ? 'not-allowed' : 'pointer',
                                "&.Mui-disabled": {
                                    backgroundColor: isPending && theme.palette.primary.dark,
                                }
                            })}
                        >
                            {
                                isPending ?
                                    <CircularProgress />
                                    :
                                    t('actions.login')
                            }

                        </MyButton>
                    </Grid>

                    {/* register */}
                    <Grid>
                        <Typography variant='bodySmall'>
                            <Link to={isPending ? '#' : '/register'}>{t('actions.register')}</Link>
                        </Typography>
                    </Grid>
                </Grid>



            </form>
        </Box>
    );
};

export default LoginForm;
