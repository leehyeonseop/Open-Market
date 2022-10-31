import { Alert, Snackbar } from '@mui/material';
import { ISuccessProps } from '../../types';
import { SuccessMessage } from './Success.style';

const Success = (props: ISuccessProps) => {
    const { open, setOpen, message } = props;

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: string,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: '100%' }}
                >
                    <SuccessMessage>{message}</SuccessMessage>
                </Alert>
            </Snackbar>
        </>
    );
};

export default Success;
