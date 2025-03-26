import {Button, Typography} from "@mui/material";

const AuthPage = () => {
    return (
        <div>
            <Typography variant='h1'>heading one</Typography>
            <Typography variant='h2'>h2</Typography>
            <Typography variant='h3'>h3</Typography>
            <Typography variant='h4'>h4</Typography>
            <Typography variant='h5'>h5</Typography>
            <Typography variant='h6'>h6</Typography>
            <Typography variant='bodyLarge'>bodyLarge</Typography>
            <Typography variant='bodyRegular'>bodyRegular</Typography>
            <Typography variant='bodySmall'>bodySmall</Typography>
            <Typography variant='bodyExtraSmall'>bodyExtraSmall</Typography>
            <Typography variant='caption'>caption</Typography>

            <Button color='primary' variant="contained">primary</Button>
            <Button color='error' variant="contained">error</Button>
            <Button color='bgColor' variant="contained">bgColor</Button>
            <Button color='inputColor' variant="contained">inputColor</Button>
            <Button color='cardColor' variant="contained">cardColor</Button>

        </div>
    );
};

export default AuthPage;
