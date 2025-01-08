import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import UpdateMarathonForm from './UpdateMarathonForm';

const MyMarathonUpdateModalForm = ({handleClose, open}) => {

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
                <UpdateMarathonForm></UpdateMarathonForm>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button>Cancel</Button>
            <Button onClick={handleClose}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
};

MyMarathonUpdateModalForm.propTypes = {
    handleClose: PropTypes.func,
    open: PropTypes.bool,
}

export default MyMarathonUpdateModalForm;