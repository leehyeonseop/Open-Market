import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Join from '../components/join/Join';

import { queryClient } from '../react-query/queryClient';
import { GlobalStyle } from './GlobalStyle';

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            {/* <div className="App">
                <h1>안녕하세요</h1>
            </div> */}
            <Join />
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default App;
