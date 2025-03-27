import { Outlet } from "react-router-dom"
import Wave from "../components/wave/Wave";
import {Grid} from "@mui/material";

const CommonLayout = () => {
    return (
        <>
            <Grid
                container
                direction='column'
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh'
                }}
            >
                <Grid>
                    <Outlet />
                </Grid>
            </Grid>

            <Wave />
        </>
    );
};

export default CommonLayout;
