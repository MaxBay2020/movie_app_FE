import {Grid} from "@mui/material";
import LoginForm from "../../components/auth/loginForm/LoginForm";
import {Navigate} from "react-router-dom";

const AuthPage = () => {

    const login = localStorage.getItem('login')

    if(login){
        return <Navigate to="/movies" replace />
    }

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
