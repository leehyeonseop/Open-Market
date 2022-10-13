import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Loading from '../components/loading/Loading';

import { queryClient } from '../react-query/queryClient';
import { GlobalStyle } from './GlobalStyle';
import router from './Router';

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
