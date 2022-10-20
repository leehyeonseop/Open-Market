// import { useState } from 'react';
// import { Button, IconButton, Snackbar } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';

// const Error = (props: any) => {
//     const [open, setOpen] = useState(false);

//     const handleClick = () => {
//         setOpen(true);
//     };

//     const handleClose = (
//         event: React.SyntheticEvent | Event,
//         reason?: string,
//     ) => {
//         if (reason === 'clickaway') {
//             return;
//         }

//         setOpen(false);
//     };

//     const action = (
//         <>
//             <Button color="secondary" size="small" onClick={handleClose}>
//                 UNDO
//             </Button>
//             <IconButton
//                 size="small"
//                 aria-label="close"
//                 color="inherit"
//                 onClick={handleClose}
//             >
//                 <CloseIcon fontSize="small" />
//             </IconButton>
//         </>
//     );

//     return (
//         <>
//             <Snackbar
//                 open={open}
//                 autoHideDuration={6000}
//                 onClose={handleClose}
//                 message="Note archived"
//                 action={action}
//             />
//         </>
//     );
// };

// export default Error;

import { Alert, Snackbar } from '@mui/material';
import { ErrorMessage } from './Error.style';

const Error = (props: any) => {
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
