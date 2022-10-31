import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';

import router from './Router';
import { queryClient } from '../react-query/queryClient';
import { GlobalStyle } from './GlobalStyle';

import Loading from '../components/loading/Loading';

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Loading />
            <RecoilRoot>
                <GlobalStyle />
                <RouterProvider router={router} />
                <ReactQueryDevtools />
            </RecoilRoot>
        </QueryClientProvider>
    );
}

export default App;
