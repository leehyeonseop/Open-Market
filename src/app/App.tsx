import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carousel from '../components/carousel/Carousel';

import Join from '../components/join/Join';
import Login from '../components/login/Login';
import HomePage from '../pages/homePage/HomePage';

import { queryClient } from '../react-query/queryClient';
import { GlobalStyle } from './GlobalStyle';

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/carousel" element={<Carousel />} />
                </Routes>
            </BrowserRouter>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default App;
