import {Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography} from "@mui/material";
import MyInput from "../../myInput/MyInput";
import MyButton from "../../myButton/MyButton";
import {MyCheckbox, MyLabel} from "../../myCheckbox/MyCheckbox";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginFormSchema} from "../../../utils/schema";
import {Link} from "react-router-dom";

const LoginForm = () => {

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
                            Sign in
                        </Typography>
                    </Grid>
                    {/* email input */}
                    <Grid sx={{ width: '100%' }}>
                        <MyInput
                            type="text"
                            placeholder="Email"
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
                            placeholder="Password"
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
                    <Grid>'64px'
                        <FormGroup>
                            <FormControlLabel 
                                control={<MyCheckbox {...register('rememberMe')} />}
                                label={<MyLabel>Remember me</MyLabel>}
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
                                width: {
                                    xs: '300px',
                                    sm: '380px',
                                    md: '300px'
                                },
                                height: '54px'
                            }}
                        >
                            Login
                        </MyButton>
                    </Grid>

                    {/* register */}
                    <Grid>
                        <Typography variant='bodySmall'>
                            <Link to='/register'>Register</Link>
                        </Typography>
                    </Grid>
                </Grid>



            </form>
        </Box>
    );
};

export default LoginForm;
