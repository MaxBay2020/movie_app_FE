import {Box} from "@mui/material";
import { motion } from "motion/react"
import {memo} from "react";

const waveStyle = {
    container: {
        position: 'absolute',
        width: '100%',
        height: '150px',
        bottom: 0,
        left: 0,
        overflow: 'hidden',
        zIndex: -999
    }
}

const Wave = () => {

    return (
        <Box sx={waveStyle.container}>
            <motion.svg
                data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                width="100%"
                height="100%"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.path
                    d="M0,100 C150,200 350,0 600,50 C850,100 1050,0 1200,80 V120 H0 Z"
                    fill="rgba(34, 73, 87, 0.9)"
                    stroke="none"
                    animate={{
                        d: [
                            "M0,100 C150,200 350,0 600,50 C850,100 1050,0 1200,80 V120 H0 Z",
                            "M-300,100 C150,200 350,0 600,50 C850,100 1050,0 1500,80 V120 H-300 Z",
                            "M-600,100 C150,200 350,0 600,50 C850,100 1050,0 1800,80 V120 H-600 Z",
                            "M-900,100 C150,200 350,0 600,50 C850,100 1050,0 2100,80 V120 H-900 Z",
                        ],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: 'loop',
                    }}
                />


                <motion.path
                    d="M0,80 C200,160 400,0 600,50 C800,100 1000,10 1200,60 V120 H0 Z"
                    fill="rgba(255, 255, 255, 0.1)"
                    stroke="none"
                    animate={{
                        d: [
                            "M0,80 C200,160 400,0 600,50 C800,100 1000,10 1200,60 V120 H0 Z",
                            "M-300,80 C-100,180 200,0 500,50 C800,100 1100,0 1500,70 V120 H-300 Z",
                            "M-600,80 C-200,180 100,0 400,50 C700,100 1000,0 1800,80 V120 H-600 Z",
                            "M-900,80 C-300,160 0,0 300,50 C600,100 900,0 2100,90 V120 H-900 Z",
                        ],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                />
            </motion.svg>
        </Box>
    );
};

export default memo(Wave);
