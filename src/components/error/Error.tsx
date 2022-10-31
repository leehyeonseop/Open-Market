import { Alert, Snackbar } from '@mui/material';
import { IErrorProps } from '../../types';
import { ErrorMessage } from './Error.style';

const Error = (props: IErrorProps) => {
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
                    severity="error"
                    sx={{ width: '100%' }}
                >
                    <ErrorMessage>{message}</ErrorMessage>
                </Alert>
            </Snackbar>
        </>
    );
};

export default Error;
