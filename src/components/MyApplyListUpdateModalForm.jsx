import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import UpdateMyApplyListForm from './UpdateMyApplyListForm';

const MyApplyListUpdateModalForm = ({handleClose, open}) => {
    return (
        <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Marathon Update Form"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <UpdateMyApplyListForm></UpdateMyApplyListForm>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button>Cancel</Button>
            <Button onClick={handleClose}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
};

MyApplyListUpdateModalForm.propTypes = {
    handleClose: PropTypes.func,
    open: PropTypes.bool,
}

export default MyApplyListUpdateModalForm;