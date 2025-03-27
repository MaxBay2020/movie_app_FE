import {Checkbox, styled} from "@mui/material";

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

export const MyLabel = styled('span')(MyLabelStyle)

export const MyCheckbox = styled(Checkbox)(MyCheckboxStyle)


