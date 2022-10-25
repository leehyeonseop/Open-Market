import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
} from 'react-router-dom';

import CartPage from '../pages/cartPage/CartPage';
import HomePage from '../pages/homePage/HomePage';
import JoinCompletePage from '../pages/joinCompletePage/JoinCompletePage';
import JoinPage from '../pages/joinPage/JoinPage';
import LoginPage from '../pages/loginPage/LoginPage';
import PaymentPage from '../pages/paymentPage/PaymentPage';
import ProductDetailPage from '../pages/productDetailPage/ProductDetailPage';
import ProductRegistrationPage from '../pages/productRegistrationPage/ProductRegistrationPage';
import SellerCenterPage from '../pages/sellerCenterPage/SellerCenterPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="join" element={<JoinPage />} />
            <Route path="joinComplete" element={<JoinCompletePage />} />
            <Route path="product/:productID" element={<ProductDetailPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="sellerCenter" element={<SellerCenterPage />} />
            <Route
                path="productRegistration"
                element={<ProductRegistrationPage />}
            />
        </>,
    ),
);

export default router;
