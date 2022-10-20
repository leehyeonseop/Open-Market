import { AxiosError } from 'axios';
import { QueryClient } from 'react-query';

const queryErrorHandler = (error: unknown) => {
    console.log('에러 : ', error);
    error instanceof AxiosError ? alert(error.message) : alert('오류');
};

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            onError: queryErrorHandler,
        },
        mutations: {
            onError: queryErrorHandler,
        },
    },
});
