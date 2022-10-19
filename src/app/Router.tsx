import { ScrollRestoration } from 'react-router-dom';
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
} from 'react-router-dom';
import Join from '../components/join/Join';
import Login from '../components/login/Login';
import Modal from '../components/modal/Modal';
import CartPage from '../pages/cartPage/CartPage';
import HomePage from '../pages/homePage/HomePage';
import JoinCompletePage from '../pages/joinCompletePage/JoinCompletePage';
import PaymentPage from '../pages/paymentPage/PaymentPage';
import ProductDetailPage from '../pages/productDetailPage/ProductDetailPage';
import ProductRegistrationPage from '../pages/productRegistrationPage/ProductRegistrationPage';
import SellerCenterPage from '../pages/sellerCenterPage/SellerCenterPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route path="join" element={<Join />} />
            <Route path="joinComplete" element={<JoinCompletePage />} />
            <Route path="product/:productID" element={<ProductDetailPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="sellerCenter" element={<SellerCenterPage />} />
            <Route
                path="productRegistration"
                element={<ProductRegistrationPage />}
            />
            {/* <Route path="test" element={<Modal />} /> */}
        </>,
    ),
);

export default router;
