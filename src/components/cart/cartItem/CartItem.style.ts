import styled from 'styled-components';
import store from '../../../assets/images/store.jpg';
import Button from '../../button/Button';
import { ReactComponent as Delete } from '../../../assets/icons/icon-delete.svg';

export const Wrapper = styled.li`
    padding: 1.40625% calc(7.8125% - 2px) 1.40625% calc(2.34375% - 2px);
    box-sizing: border-box;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    position: relative;
`;

export const Checkbox = styled.input.attrs(() => ({
    type: 'checkbox',
}))`
    margin: 0;
    height: 20px;
    width: 20px;
    appearance: none;
    -webkit-appearance: none;
    border: 0.2rem solid #fff;
    border-radius: 50%;
    outline: 2px solid #21bf48;
    cursor: pointer;
    background-color: #fff;
    margin-right: 3.125%;
    &:checked {
        background-color: #21bf48;
    }
`;

export const ProductInfo = styled.div`
    width: 47.96875%;
    margin-right: 3.75%;
    display: flex;
`;

export const Figure = styled.figure`
    width: 26.0586319218241%;
    padding-top: 26.0586319218241%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${store});
    border-radius: 10px;
`;

export const Image = styled.img`
    display: none;
`;

export const Description = styled.div`
    width: 68.07817589576547%;
    margin-left: auto;
    display: flex;
    flex-flow: column nowrap;
`;

export const Sellor = styled.span`
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: #767676;
`;

export const ProductName = styled.span`
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.375rem;
    margin: 1.628664495114007% 0;
`;

export const Price = styled.strong`
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.125rem;
`;

// export const Won = styled.span`
//     font-weight: 400;
//     font-size: 1.125rem;
//     line-height: 1.438rem;
//     margin-left: 2px;
// `;

export const Delivery = styled.span`
    display: block;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: #767676;
    /* margin-top: 21.9047619047619%; */
    margin-top: auto;
    padding-bottom: 2.60586319218241%;
    /* border-bottom: 1px solid #c4c4c4; */
`;

export const Amount = styled.div`
    width: 11.71875%;
`;

export const ProductPrice = styled.div`
    width: 10.15625%;
    margin-left: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;

export const TotalPrice = styled.strong`
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.438rem;
    color: #eb5757;
    margin-bottom: 20%;
`;

export const OrderButton = styled(Button)`
    width: 100%;
`;

export const DeleteButton = styled(Delete)`
    position: absolute;
    top: 9%;
    right: 1.40625%;
    transform: translate(-5.5%, -0.859375%);
    cursor: pointer;
`;
