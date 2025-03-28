import {Container, Grid} from "@mui/material";
import LoginForm from "../../components/auth/loginForm/LoginForm";

const AuthPage = () => {
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
            <LoginForm />
        </Grid>
    </Grid>
    );
};

export default AuthPage;
