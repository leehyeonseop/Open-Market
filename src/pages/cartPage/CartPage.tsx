import { useEffect, useRef, useState, createRef, SyntheticEvent } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { checkedCartItemState, cartItemState } from '../../atom';
import CartInfo from '../../components/cart/cartInfo/CartInfo';
import CartList from '../../components/cart/cartList/CartList';
import Header from '../../components/header/Header';
import { useCart } from '../../hooks/useCart';
import { ICartItemDetail, ICartItemData } from '../../types';
import {
    CartHeader,
    H2,
    Main,
    ProductInfo,
    ProductPrice,
    Amount,
    Checkbox,
} from './CartPage.style';

function CartPage() {
    const { cartItems } = useCart();

    const cartItem = useRecoilValue(cartItemState);
    const setCheckedItems = useSetRecoilState(checkedCartItemState);

    const formRef = useRef<HTMLFormElement>(null);
    const checkAllRef = useRef<HTMLInputElement>(null);
    const checkboxRefs = (cartItems as ICartItemData[]).map(() =>
        createRef<HTMLInputElement>(),
    );

    const [formData, setFormData] = useState<FormData>();

    const setAllCheckedFromItems = () => {
        if (!formRef.current) return;
        const formData = new FormData(formRef.current);
        const selectedCount = formData.getAll('check-item').length;
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

    return (
        <>
            <Header />
            <Main>
                <H2>장바구니</H2>
                <form ref={formRef} onChange={handleCheckboxChanged}>
                    <CartHeader>
                        <Checkbox ref={checkAllRef} />
                        <ProductInfo>상품정보</ProductInfo>
                        <Amount>수량</Amount>
                        <ProductPrice>상품금액</ProductPrice>
                    </CartHeader>
                    <CartList
                        cartItems={cartItems}
                        checkboxRefs={checkboxRefs}
                    />
                    <CartInfo />
                </form>
            </Main>
        </>
    );
}

export default CartPage;
