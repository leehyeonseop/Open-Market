import styled from 'styled-components';

import minus from '../../../assets/icons/icon-minus-line.svg';
import plus from '../../../assets/icons/icon-plus-line.svg';

export const Wrapper = styled.div`
    /* width: 600px;- */
    display: flex;
`;

export const Figure = styled.figure`
    padding-top: 46.88%;
    width: 46.88%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Image = styled.img`
    display: none;
`;

export const Description = styled.div`
    width: 49.22%;
    margin-left: auto;
    background-color: lightcoral;
    display: flex;
    flex-direction: column;
`;

export const Sellor = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #767676;
`;

export const ProductName = styled.span`
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    margin-top: 2.54%;
    margin-bottom: 3.17%;
`;

export const PriceWrapper = styled.div`
    /* display: flex; */
`;

export const Price = styled.strong`
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
`;

export const Won = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    margin-left: 2px;
`;

export const Delivery = styled.span`
    display: block;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #767676;
    margin-top: 21.9%;
    margin-bottom: 3.17%;
`;

export const Amount = styled.div`
    width: 23.81%;
    height: 7.94%;
    background-color: white;
    border: 1px solid #c4c4c4;
    display: flex;
    box-sizing: border-box;
`;

export const MinusButton = styled.span`
    width: 33.333333%;
    padding: 10%;
    box-sizing: border-box;

    background-image: url(${minus});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const Count = styled.span`
    width: 33.333333%;
`;

export const PlusButton = styled.span`
    width: 33.333333%;
    padding: 10%;
    box-sizing: border-box;
    background-image: url(${plus});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;
