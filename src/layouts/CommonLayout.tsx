import { Outlet } from "react-router-dom"
import Wave from "../components/wave/Wave";
import {Container, Grid} from "@mui/material";

const CommonLayout = () => {
    return (
        <>
            <Container>
                <Outlet />
            </Container>

            <Wave />
        </>
    );
};

export default CommonLayout;
