import {Checkbox, styled} from "@mui/material";
import {memo} from "react";

const MyCheckboxStyle = ({ theme }) => ({
    '& .css-1umw9bq-MuiSvgIcon-root': {
        fill: theme.palette.inputColor.main,
    },
    '&.Mui-checked .MuiSvgIcon-root': {
        fill: '#fff',
    },

})

const MyLabelStyle = ({ theme }) => ({
    ...theme.typography.bodySmall,
})

export const MyLabel = memo(styled('span')(MyLabelStyle))

export const MyCheckbox = memo(styled(Checkbox)(MyCheckboxStyle))




