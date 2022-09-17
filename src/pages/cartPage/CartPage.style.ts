import styled from 'styled-components';

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
`;

export const Radio = styled.input.attrs(() => ({
    type: 'radio',
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
    &:checked {
        background-color: #21bf48;
    }
`;

export const ProductInfo = styled.div`
    width: 47.96875%;
`;

export const Amount = styled.div`
    width: 11.71875%;
`;

export const ProductPrice = styled.div`
    width: 10.15625%;
`;
