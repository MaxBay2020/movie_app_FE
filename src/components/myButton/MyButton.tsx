import {Button, styled} from "@mui/material";
import {memo} from "react";

const myButtonStyle = ({ theme, style }: any) => ({
    width: style?.width || '100%',
    borderRadius: '10px',
    padding: '15px 0',
    ...theme.typography.bodyRegular,
})

const MyButton = styled(Button)(myButtonStyle) as typeof Button

export default memo(MyButton);
