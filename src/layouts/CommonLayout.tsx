import { Outlet } from "react-router-dom"
import Wave from "../components/wave/Wave";
import {Container, Grid} from "@mui/material";
import {memo} from "react";
import Header from "../components/header/Header";

const CommonLayout = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>

            <Wave />
        </>
    );
};

export default memo(CommonLayout);
