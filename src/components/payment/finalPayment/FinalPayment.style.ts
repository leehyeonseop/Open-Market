import styled from 'styled-components';
import checkbox from '../../../assets/icons/check-box.svg';
import filledCheckbox from '../../../assets/icons/check-fill-box.svg';

export const Section = styled.section``;

export const H3 = styled.h3`
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.875rem;
    padding-bottom: 18px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid #21bf48;
    border-radius: 10px;
`;

export const PriceList = styled.dl`
    padding: 30px 4.583333333333333% 20px;
    display: flex;
    flex-flow: column nowrap;
`;

export const PriceWrapper = styled.div`
    padding: 0 1.388888888888889%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:not(:last-child) {
        margin-bottom: 15px;
    }

    &:nth-child(3) {
        margin-bottom: 18px;
    }

    &:last-child {
        border-top: 1px solid #c4c4c4;
        padding-top: 24px;
    }
`;

export const Dt = styled.dt``;

export const Dd = styled.dd`
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: #767676;

    span {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.438rem;
        margin-right: 4px;
        color: black;
    }

    strong {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.875rem;
        color: #eb5757;
    }
`;

export const PriceInfoFooter = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 30px 5.833333333333333% 32px;
    background-color: #f2f2f2;
    border-radius: 0 0 10px 10px;
`;

export const CheckBox = styled.input`
    display: none;

    & + label {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.25rem;
    }

    & + label::before {
        flex-shrink: 0;
        display: block;
        content: '';
        margin-right: 2.380952380952381%;
        width: 16px;
        height: 16px;
        background-image: url(${checkbox});
    }

    &:checked + label::before {
        background-image: url(${filledCheckbox});
    }
`;

export const PaymentButton = styled.button`
    width: 52.38095238095238%;
    padding: 19px 0;
    margin-top: 30px;
    align-self: center;
    background-color: #21bf48;
    color: white;
    border: 0;
    border-radius: 5px;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.875rem;
    cursor: pointer;
    &:disabled {
        background-color: #c4c4c4;
        cursor: default;
    }
`;
