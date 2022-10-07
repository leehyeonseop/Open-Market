import { useEffect, useRef, useState, createRef, SyntheticEvent } from 'react';
import { useQueries } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { checkedCartItemState, cartItemState } from '../../atom';
import CartInfo from '../../components/cart/cartInfo/CartInfo';
import CartList from '../../components/cart/cartList/CartList';
import Header from '../../components/header/Header';
import { useCart } from '../../hooks/useCart';
import { getProductDetail } from '../../hooks/useProductDetail';
import { ICartItemDetail, ICartItemData } from '../../types';
import {
    CartHeader,
    H2,
    Main,
    ProductInfo,
    ProductPrice,
    Amount,
    Checkbox,
    Strong,
    Span,
    OrderButton,
} from './CartPage.style';

function CartPage() {
    const { cartItems } = useCart();

    console.log('장바구니 페이지에서 : ', cartItems);

    console.log('이게뭘까 ? ', !cartItems);
    console.log('이게뭘까2 ? ', !!cartItems);

    // === start
    const cartItemsDetailList = useQueries(
        cartItems.map((item: any) => {
            return {
                queryKey: ['productDetail', item.product_id],
                queryFn: () => getProductDetail(item.product_id),
            };
        }),
    );

    console.log('cartItemsDetailList : ', cartItemsDetailList);

    const cartItem = useRecoilValue(cartItemState);
    const setCheckedItems = useSetRecoilState(checkedCartItemState);

    const formRef = useRef<HTMLFormElement>(null);
    const checkAllRef = useRef<HTMLInputElement>(null);
    const checkboxRefs = (cartItems as ICartItemData[]).map(() =>
        createRef<HTMLInputElement>(),
    );

    const [formData, setFormData] = useState<FormData>();

    const navigate = useNavigate();

    const getSelectedCount = () => {
        if (!formRef.current) return;
        const formData = new FormData(formRef.current);
        const selectedCount = formData.getAll('check-item').length;
        return selectedCount;
    };

    const setAllCheckedFromItems = () => {
        const selectedCount = getSelectedCount();
        const allChecked = selectedCount === cartItems.length;
        checkAllRef.current!.checked = allChecked;
    };

    const setItemsCheckedFromAll = () => {
        const allChecked = checkAllRef.current!.checked;
        checkboxRefs.forEach((inputElem) => {
            if (inputElem.current !== null) {
                inputElem.current.checked = allChecked;
            }
        });
    };

    const handleCheckboxChanged = (e: SyntheticEvent) => {
        if (!formRef.current) return;
        const targetInput = e.target as HTMLInputElement;

        if (targetInput === checkAllRef.current) {
            setItemsCheckedFromAll();
        } else {
            setAllCheckedFromItems();
        }

        const data = new FormData(formRef.current);
        setFormData(data);
    };

    // useEffect(() => {
    //     if (checkboxRefs.length === 0) return;
    //     checkAllRef.current!.checked = true;
    //     setItemsCheckedFromAll();
    // }, [checkboxRefs]);

    useEffect(() => {
        const checkedItems = checkboxRefs.reduce<ICartItemDetail[]>(
            (res, ref, i) => {
                if (ref.current && ref.current.checked) {
                    const targetDetail = cartItem.find(
                        (element) =>
                            element.product_id === cartItems[i].product_id,
                    );
                    targetDetail && res.push(targetDetail);
                }

                return res;
            },
            [],
        );

        setCheckedItems(checkedItems);
    }, [cartItems, formData]);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const selectedCount = getSelectedCount();
        selectedCount === 0 ? alert('선택해주세요!') : navigate('/payment');
    };

    return (
        <>
            <Header />
            <Main>
                <H2>장바구니</H2>
                <form
                    ref={formRef}
                    onChange={handleCheckboxChanged}
                    onSubmit={handleSubmit}
                >
                    <CartHeader>
                        <Checkbox ref={checkAllRef} />
                        <ProductInfo>상품정보</ProductInfo>
                        <Amount>수량</Amount>
                        <ProductPrice>상품금액</ProductPrice>
                    </CartHeader>
                    {cartItems.length === 0 ? (
                        <>
                            <Strong>장바구니에 담긴 상품이 없습니다.</Strong>
                            <Span>원하는 상품을 장바구니에 담아보세요!</Span>
                        </>
                    ) : (
                        <>
                            <CartList
                                cartItems={cartItems}
                                checkboxRefs={checkboxRefs}
                            />
                            <CartInfo />
                        </>
                    )}
                    {cartItems.length !== 0 && (
                        <OrderButton type="submit">주문하기</OrderButton>
                    )}
                </form>
            </Main>
        </>
    );
}

export default CartPage;
