import {styled} from "@mui/material";

const myInputStyle = ({ theme, style }) => ({
    width: style?.width || '100%',
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
});

const MyInput = styled('input')(myInputStyle);

export default MyInput;
