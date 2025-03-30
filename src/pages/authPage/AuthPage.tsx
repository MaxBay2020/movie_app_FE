import {Grid} from "@mui/material";
import LoginForm from "../../components/auth/loginForm/LoginForm";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const AuthPage = () => {

    const { isLoggedIn } = useSelector(state => state.auth)



    if(isLoggedIn){
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
