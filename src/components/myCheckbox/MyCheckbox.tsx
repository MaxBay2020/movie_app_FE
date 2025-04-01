import {Checkbox, styled} from "@mui/material";
import {memo} from "react";

const MyCheckboxStyle = ({ theme }: any) => ({
    '& .css-1umw9bq-MuiSvgIcon-root': {
        fill: theme.palette.inputColor.main,
    },
    '&.Mui-checked .MuiSvgIcon-root': {
        fill: '#fff',
    },

})

const MyLabelStyle = ({ theme }: any) => ({
    ...theme.typography.bodySmall,
})

export const MyLabel = memo(styled('span')(MyLabelStyle))

export const MyCheckbox = memo(styled(Checkbox)(MyCheckboxStyle))




