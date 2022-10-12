import { useEffect, useRef, useState, createRef, SyntheticEvent } from 'react';
import { useQueries, UseQueryResult } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { checkedCartItemState } from '../../atom';
import CartInfo from '../../components/cart/cartInfo/CartInfo';
import CartList from '../../components/cart/cartList/CartList';
import Header from '../../components/header/Header';
import { useModify } from '../../hooks/useModify';
import { useCart } from '../../hooks/useCart';
import { getProductDetail } from '../../hooks/useProductDetail';
import { getUser } from '../../localStorage';
import { ICartItemDetail, ICartItemData, IModifyData } from '../../types';
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

    console.log('cartItems : ', cartItems);

    // const user = getUser();
    // const modify = useModify();

    const cartItemsDetailList = useQueries(
        cartItems.map((item: any) => {
            return {
                queryKey: ['productDetail', item.product_id],
                queryFn: () => getProductDetail(item.product_id),
            };
        }),
    ) as UseQueryResult<ICartItemDetail, unknown>[];

    const isSuccess = cartItemsDetailList.every((detail) => detail.isSuccess);

    // const setCheckedItems = useSetRecoilState(checkedCartItemState);
    const [checkedItems, setCheckedItems] =
        useRecoilState(checkedCartItemState);

    const formRef = useRef<HTMLFormElement>(null);
    const checkAllRef = useRef<HTMLInputElement>(null);
    const checkboxRefs = (cartItems as ICartItemData[]).map(() =>
        createRef<HTMLInputElement>(),
    );

    const [allChecked, setAllChecked] = useState<boolean>();
    const [formData, setFormData] = useState<FormData>();

    const navigate = useNavigate();

    // const getActiveCount = () => {
    //     let count = 0;
    //     cartItems.forEach((item: any) => {
    //         if (item.is_active) count++;
    //     });

    //     console.log('count : ', count);
    //     return count;
    // };

    // useEffect(() => {
    //     const activeCount = getActiveCount();
    //     activeCount === cartItems.length
    //         ? setAllChecked(true)
    //         : setAllChecked(false);
    // }, [cartItems]);

    // useEffect(() => {
    //     if (allChecked) {
    //         cartItems.forEach((item: any) => {
    //             if (item.is_active === false) {
    //                 const modifyData: IModifyData = {
    //                     user: user,
    //                     cart_item_id: item.cart_item_id,
    //                     product_id: item.product_id,
    //                     is_active: true,
    //                     amount: item.quantity,
    //                 };
    //                 modify(modifyData);
    //             }
    //         });
    //     } else if (!allChecked) {
    //         cartItems.forEach((item: any) => {
    //             if (item.is_active === true) {
    //                 const modifyData: IModifyData = {
    //                     user: user,
    //                     cart_item_id: item.cart_item_id,
    //                     product_id: item.product_id,
    //                     is_active: false,
    //                     amount: item.quantity,
    //                 };
    //                 modify(modifyData);
    //             }
    //         });
    //     }
    // }, [allChecked]);

    // useEffect(() => {
    //     console.log('allCheck : ', allCheck);
    // }, [allCheck]);

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

    // 처음에 모두 체크
    // useEffect(() => {
    //     // checkAllRef.current!.checked = true;
    //     // setItemsCheckedFromAll();
    //     if (!isSuccess) return;
    //     let checkedItems: ICartItemDetail[] = [];
    //     cartItems.forEach((item: any, index: number) => {
    //         if (item.is_active) {
    //             const targetDetail = cartItemsDetailList.find(
    //                 ({ data }) => data?.product_id === item.product_id,
    //             );
    //             if (targetDetail) {
    //                 const details = Object.assign({}, targetDetail.data);
    //                 details.quantity = item.quantity;
    //                 checkedItems.push(details);
    //             }
    //         }
    //         checkboxRefs[index].current!.checked = item.is_active;
    //     });
    //     // setAllCheckedFromItems();

    //     setCheckedItems(checkedItems);
    // }, [cartItems, checkboxRefs, cartItemsDetailList]);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const selectedCount = getSelectedCount();
        console.log('selectedCount : ', selectedCount);
        selectedCount === 0
            ? alert('선택해주세요!')
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
            <Header />
            <Main>
                <H2>장바구니</H2>
                <form
                    ref={formRef}
                    onChange={handleCheckboxChanged}
                    onSubmit={handleSubmit}
                >
                    <CartHeader>
                        <Checkbox
                            ref={checkAllRef}
                            // checked={allChecked}
                            // onChange={() => setAllChecked((prev) => !prev)}
                        />
                        <ProductInfo>상품정보</ProductInfo>
                        <Amount>수량</Amount>
                        <ProductPrice>상품금액</ProductPrice>
                    </CartHeader>
                    {cartItems.length === 0 && (
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
                            <CartInfo
                            // cartItems={cartItems}
                            // cartItemsDetailList={cartItemsDetailList}
                            />
                            <OrderButton type="submit">주문하기</OrderButton>
                        </>
                    )}
                </form>
            </Main>
        </>
    );
}

export default CartPage;
