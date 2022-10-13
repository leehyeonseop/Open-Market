import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

export const Spinner = styled(CircularProgress)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
