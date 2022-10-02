import styled from 'styled-components';
import store from '../../../assets/images/store.jpg';

export const Wrapper = styled.li`
    padding: 8px 8px 17px;
    border-bottom: 1px solid #c4c4c4;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProductInfo = styled.div`
    width: 46.04430379746835%;
    display: flex;
`;

export const Figure = styled.figure`
    width: 17.86941580756014%;
    padding-top: 17.86941580756014%;
    border-radius: 10px;
    margin-right: 6.185567010309278%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${store});
`;

export const Image = styled.img`
    display: none;
`;

export const Description = styled.div`
    display: flex;
    flex-flow: column nowrap;
    flex: 1 1 auto;
`;

export const Store = styled.span`
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: #767676;
    /* margin-top: 12px; */
    margin-top: 2.714932126696833%;
    margin-bottom: 1.357466063348416%;
`;

export const ProductName = styled.span`
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.375rem;
    /* margin-bottom: 2.262443438914027%; */
`;

export const Amount = styled.span`
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: #767676;
    margin-bottom: 2%;
    margin-top: auto;
`;

export const Discount = styled.span`
    flex: 1 1 0;
    text-align: center;
    color: #767676;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.438rem;
`;

export const DeliveryFee = styled(Discount)``;

export const Price = styled(Discount)`
    font-weight: 700;
    color: black;
`;
