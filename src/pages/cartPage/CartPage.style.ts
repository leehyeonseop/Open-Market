import styled from 'styled-components';
import plus from '../../assets/icons/icon-plus-line.svg';
import minus from '../../assets/icons/icon-minus-line.svg';

export const Main = styled.main`
    padding: 145px 16.66666666666667% 160px;
    display: flex;
    flex-flow: column nowrap;
    position: relative;
`;

export const H2 = styled.h2`
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 2.75rem;
    text-align: center;
`;

export const CartHeader = styled.div`
    padding: 1.40625% 7.8125% 1.40625% 2.34375%;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 52px;
    margin-bottom: 35px;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.438rem;
`;

export const Checkbox = styled.input.attrs(() => ({
    type: 'checkbox',
}))`
    margin: 0;
    height: 20px;
    width: 20px;
    appearance: none;
    -webkit-appearance: none;
    border: 0.2rem solid #f2f2f2;
    border-radius: 50%;
    outline: 2px solid #21bf48;
    cursor: pointer;
    background-color: #f2f2f2;
    margin-right: 3.125%;
    &:checked {
        background-color: #21bf48;
    }
`;

export const ProductInfo = styled.div`
    width: 47.96875%;
    margin-right: 3.75%;
`;

export const Amount = styled.div`
    width: 11.71875%;
`;

export const ProductPrice = styled.div`
    width: 10.15625%;
    margin-left: auto;
`;

export const CartItemList = styled.ul`
    margin-bottom: 80px;
    li {
        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }
`;

export const CartInfo = styled.div`
    background: #f2f2f2;
    border-radius: 10px;
    display: flex;
`;

export const Strong = styled.strong`
    display: block;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: black;
    text-align: center;
    margin-top: 200px;
`;

export const Span = styled.span`
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #767676;
    text-align: center;
    margin-top: 17px;
`;

export const OrderButton = styled.button`
    display: block;
    width: 17.1875%;
    background-color: #21bf48;
    border-radius: 5px;
    padding: 19px 0;
    margin: 40px auto 0 auto;
    border: 0;
    color: white;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.875rem;
    cursor: pointer;
`;
