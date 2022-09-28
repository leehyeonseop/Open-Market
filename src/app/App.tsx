import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Join from '../components/join/Join';
import Login from '../components/login/Login';
import CartPage from '../pages/cartPage/CartPage';
import HomePage from '../pages/homePage/HomePage';
import PaymentPage from '../pages/paymentPage/PaymentPage';
import ProductDetailPage from '../pages/productDetailPage/ProductDetailPage';

import { queryClient } from '../react-query/queryClient';
import { GlobalStyle } from './GlobalStyle';

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
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
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/payment" element={<PaymentPage />} />
                    </Routes>
                </BrowserRouter>
                <ReactQueryDevtools />
            </RecoilRoot>
        </QueryClientProvider>
    );
}

export default App;
