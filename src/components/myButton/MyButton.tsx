import {Button, styled} from "@mui/material";

const myButtonStyle = ({ theme, style }) => ({
    width: style?.width || '100%',
    borderRadius: '10px',
    padding: '15px 0',
    ...theme.typography.bodyRegular,
})

const MyButton = styled(Button)(myButtonStyle)

export default MyButton;
