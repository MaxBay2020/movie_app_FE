import { Outlet } from "react-router-dom"
import Wave from "../components/wave/Wave";
import {Container, Grid} from "@mui/material";
import {memo} from "react";

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

export default memo(CommonLayout);
