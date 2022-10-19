import { AxiosError } from 'axios';
import { useState } from 'react';
import { QueryClient } from 'react-query';

const queryErrorHandler = (error: unknown) => {
    console.error(error);
    error instanceof AxiosError
        ? alert(error.response?.data.detail)
        : alert('오류');
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
