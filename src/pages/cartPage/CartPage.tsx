import { useEffect, useRef, useState, createRef, SyntheticEvent } from 'react';
import { useQueries, UseQueryResult } from 'react-query';
import { useCart } from '../../hooks/useCart';
import { useNavigate, ScrollRestoration } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { getProductDetail } from '../../hooks/useProductDetail';
import { checkedCartItemState } from '../../atom';
import CartInfo from '../../components/cart/cartInfo/CartInfo';
import CartList from '../../components/cart/cartList/CartList';
import Header from '../../components/header/Header';
import Error from '../../components/error/Error';
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

    const cartItemsDetailList = useQueries(
        !!cartItems
            ? cartItems.map((item: ICartItemData) => {
                  return {
                      queryKey: ['productDetail', item.product_id],
                      queryFn: () => getProductDetail(String(item.product_id)),
                  };
              })
            : [],
    ) as UseQueryResult<ICartItemDetail, unknown>[];

    const isSuccess = cartItemsDetailList.every((detail) => detail.isSuccess);

    const [checkedItems, setCheckedItems] =
        useRecoilState(checkedCartItemState);

    const formRef = useRef<HTMLFormElement>(null);
    const checkAllRef = useRef<HTMLInputElement>(null);
    const checkboxRefs =
        cartItems !== null
            ? (cartItems as ICartItemData[]).map(() =>
                  createRef<HTMLInputElement>(),
              )
            : [];

    const [formData, setFormData] = useState<FormData>();
    const [open, setOpen] = useState<boolean>(false);

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

    useEffect(() => {
        const checkedItems = checkboxRefs.reduce<ICartItemDetail[]>(
            (res, ref, i) => {
                if (ref.current && ref.current.checked) {
                    const targetDetail = cartItemsDetailList.find(
                        ({ data }) =>
                            data?.product_id === cartItems[i].product_id,
                    );

                    if (targetDetail && targetDetail.data) {
                        const details = Object.assign({}, targetDetail.data);
                        details.quantity = cartItems[i].quantity;
                        res.push(details);
                    }
                }
                return res;
            },
            [],
        );

        setCheckedItems(checkedItems);
    }, [formData]);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const selectedCount = getSelectedCount();
        selectedCount === 0
            ? setOpen(true)
            : navigate('/payment', {
                  state: {
                      order_kind: 'cart_order',
                      items: checkedItems,
                      cartItems: cartItems,
                  },
              });
    };

    return (
        <>
            <ScrollRestoration />
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
                    {cartItems !== null && cartItems.length === 0 && (
                        <>
                            <Strong>장바구니에 담긴 상품이 없습니다.</Strong>
                            <Span>원하는 상품을 장바구니에 담아보세요!</Span>
                        </>
                    )}
                    {isSuccess && cartItems.length !== 0 && (
                        <>
                            <CartList
                                cartItems={cartItems}
                                cartItemsDetailList={cartItemsDetailList}
                                checkboxRefs={checkboxRefs}
                            />
                            <CartInfo />
                            <OrderButton type="submit">주문하기</OrderButton>
                        </>
                    )}
                </form>
            </Main>
            <Error
                open={open}
                setOpen={setOpen}
                message="주문할 상품을 선택해주세요."
            />
        </>
    );
}

export default CartPage;
