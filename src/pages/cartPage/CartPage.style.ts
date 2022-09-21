import styled from 'styled-components';
import plus from '../../assets/icons/icon-plus-line.svg';
import minus from '../../assets/icons/icon-minus-line.svg';

export const Main = styled.main`
    padding: 54px 16.66666666666667% 160px;
    display: flex;
    flex-flow: column nowrap;
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
`;

export const Radio = styled.input.attrs(() => ({
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

export const CartInfoSection = styled.div`
    position: relative;
    width: 25%;
    display: flex;
    flex-flow: column nowrap;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
    padding-top: 46px;
    padding-bottom: 42px;
    align-items: center;
    strong {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.875rem;
        margin-top: 12px;
    }
    span {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.25rem;
        margin-left: 2px;
    }
    &:nth-child(1)::after {
        display: block;
        content: '';
        background-image: url(${minus});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 50%;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(50%, -50%);
        width: 34px;
        height: 34px;
        padding: 2.3625%;
        box-sizing: border-box;
        border-radius: 50%;
        background-color: #fff;
    }
    &:nth-child(2)::after {
        display: block;
        content: '';
        background-image: url(${plus});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 50%;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(50%, -50%);
        width: 34px;
        height: 34px;
        padding: 2.3625%;
        box-sizing: border-box;
        border-radius: 50%;
        background-color: #fff;
    }
`;

export const Payment = styled(CartInfoSection)`
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25rem;
    padding-bottom: 0;
    strong {
        font-size: 2.25rem;
        line-height: 2.813rem;
        color: #eb5757;
        margin-top: 5px;
    }
    span {
        font-size: 1.125rem;
        line-height: 1.438rem;
    }
`;
