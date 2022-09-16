import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Join from '../components/join/Join';
import Login from '../components/login/Login';
import HomePage from '../pages/homePage/HomePage';
import ProductDetailPage from '../pages/productDetailPage/ProductDetailPage';

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
                    <Route
                        path="/product/:productID"
                        element={<ProductDetailPage />}
                    />
                </Routes>
            </BrowserRouter>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default App;
