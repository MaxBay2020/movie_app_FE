import {Button, styled} from "@mui/material";

const myButtonStyle = ({ theme }) => ({
    width: '380px',
    borderRadius: '10px',
    padding: '15px 126px',
    ...theme.typography.bodyRegular,

    [theme.breakpoints.up('md')]: {
        width: '300px',
    },
})

const MyButton = styled(Button)(myButtonStyle)

export default MyButton;
