import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MyButton from "../myButton/MyButton";
import {memo} from "react";
import {useTheme} from "@mui/material";
import {Link} from "react-router-dom";

type AlertPropsType = {
    handleCloseAlertDialog: () => void,
    openAlertDialog: boolean,
}

const AlertDialog = ({handleCloseAlertDialog, openAlertDialog}: AlertPropsType) => {
    const theme = useTheme()
    return (
        <Dialog
            open={openAlertDialog}
            onClose={handleCloseAlertDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
                '& .MuiPaper-root': {
                    background: theme.palette.bgColor.main,
                    p: '20px'
                },

            }}
        >
            <DialogTitle id="alert-dialog-title">
                You will discard changes, do you want to continue?
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" color='#fff'>
                    Your changes will be discarded.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Link to='/movies'>
                    <MyButton onClick={handleCloseAlertDialog} variant='outlined' color='#fff' sx={{ width: '120px', height: '46px', mr: '10px' }}>
                        Discard
                    </MyButton>
                </Link>
                <MyButton onClick={handleCloseAlertDialog} variant='contained' color='primary' sx={{ width: '120px', height: '46px' }}>Cancel</MyButton>
            </DialogActions>
        </Dialog>
    );
};

export default memo(AlertDialog);
