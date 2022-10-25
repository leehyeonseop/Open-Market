import { AxiosError } from 'axios';
import { QueryClient } from 'react-query';

const queryErrorHandler = (error: unknown) => {
    console.log('에러 : ', error);
    error instanceof AxiosError
        ? alert(error.message)
        : alert('예상치 못한 오류가 발생했습니다.');
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
