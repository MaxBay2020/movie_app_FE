import {createTheme} from "@mui/material/styles";

const globalTheme = createTheme({
    palette: {
        primary: {
            main: '#2BD17E'
        },
        error: {
            main: '#EB5757'
        },
        bgColor: {
            main: '#093545'
        },
        inputColor: {
            main: '#224957',
        },
        cardColor: {
            main: '#092C39'
        }
    },
    typography: {
        h1: {
            fontSize: '64px',
            lineHeight: '80px',
            letterSpacing: '0'
        },
        h2: {
            fontSize: '48px',
            lineHeight: '56px',
            letterSpacing: '0'
        },
        h3: {
            fontSize: '32px',
            lineHeight: '40px',
            letterSpacing: '0'
        },
        h4: {
            fontSize: '24px',
            lineHeight: '32px',
            letterSpacing: '0'
        },
        h5: {
            fontSize: '20px',
            lineHeight: '24px',
            letterSpacing: '0'
        },
        h6: {
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0'
        },
        bodyLarge: {
            fontSize: '20px',
            lineHeight: '32px',
            letterSpacing: '0'
        },
        bodyRegular: {
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0'
        },
        bodySmall: {
            fontSize: '14px',
            lineHeight: '24px',
            letterSpacing: '0'
        },
        bodyExtraSmall: {
            fontSize: '12px',
            lineHeight: '24px',
            letterSpacing: '0'
        },
        caption: {
            fontSize: '14px',
            lineHeight: '16px',
            letterSpacing: '0'
        }
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'montserrat, sans-serif'
                }
            }
        }
    }
})

export default globalTheme