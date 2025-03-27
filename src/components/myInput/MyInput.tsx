import {styled, TextField} from "@mui/material";

const myInputStyle = ({ theme }) => ({
    width: '380px',
    height: '45px',
    borderRadius: '10px',
    padding: '10px', // Adjust the padding for text inside the input

    backgroundColor: theme.palette.inputColor.main,
    border: `1px solid ${theme.palette.inputColor.main}`,

    '&:hover': {
        border: `1px solid ${theme.palette.inputColor.main}`,
    },

    '&:focus': {
        backgroundColor: 'transparent',
        borderColor: theme.palette.inputColor.main,
        outline: 'none',
        '&::placeholder': {
            opacity: 0,
        },
    },

    '&.error': {
        borderColor: theme.palette.error.main,
    },

    '&::placeholder': {
        ...theme.typography.bodySmall
    },

    [theme.breakpoints.up('md')]: {
        width: '300px',
    },
});

const MyInput = styled('input')(myInputStyle);

export default MyInput;
