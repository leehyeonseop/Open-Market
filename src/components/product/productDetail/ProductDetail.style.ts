import styled from 'styled-components';
import AmountControl from '../../button/AmountControl';
import Button from '../../button/Button';

export const Wrapper = styled.div`
    display: flex;
`;

export const Figure = styled.figure`
    padding-top: 46.875%;
    width: 46.875%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Image = styled.img`
    display: none;
`;

export const Description = styled.div`
    width: 49.21875%;
    margin-left: auto;
    display: flex;
    flex-direction: column;
`;

export const Sellor = styled.span`
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.438rem;
    color: #767676;
`;

export const ProductName = styled.span`
    font-weight: 400;
    font-size: 2.25rem;
    line-height: 2.813rem;
    margin-top: 2.53968253968254%;
    margin-bottom: 3.174603174603175%;
`;

export const PriceWrapper = styled.div`
    /* display: flex; */
`;

export const Price = styled.strong`
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 2.813rem;
`;

export const Won = styled.span`
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.438rem;
    margin-left: 2px;
`;

export const Delivery = styled.span`
    display: block;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
    color: #767676;
    /* margin-top: 21.9047619047619%; */
    margin-top: auto;
    padding-bottom: 3.174603174603175%;
    border-bottom: 1px solid #c4c4c4;
`;

export const Amount = styled.div`
    width: 23.80952380952381%;
    height: 7.936507936507937%;
    background-color: white;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    display: flex;
    box-sizing: border-box;
    margin: 4.761904761904762% 0;
`;

export const AmountButton = styled.button`
    width: 33.333333333333%;
    padding: 10%;
    box-sizing: border-box;
    display: flex;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background-color: inherit;
    border-radius: 5px;
    &:disabled {
        cursor: default;
    }
`;

export const Count = styled.strong`
    width: 33.333333333333%;
    padding: 10%;
    box-sizing: border-box;
    display: flex;
    font-size: 0.9375vw;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-left: 1px solid #c4c4c4;
    border-right: 1px solid #c4c4c4;
`;

export const StyledAmountControl = styled(AmountControl)`
    margin: 4.761904761904762% 0;
`;

export const TotalWrapper = styled.div`
    display: flex;
    padding-top: 5.079365079365079%;
    border-top: 1px solid #c4c4c4;
    word-break: keep-all;
    align-items: center;
`;

export const Span = styled.span`
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.438rem;
`;

export const TotalAmount = styled(Span)`
    font-weight: 400;
    color: #767676;
    margin-right: 4.444444444444444%;
    margin-left: auto;
`;

export const TotalNumber = styled(TotalAmount)`
    font-weight: 700;
    color: #21bf48;
    margin-right: 0;
`;

export const TotalPrice = styled.strong`
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 2.813rem;
    color: #21bf48;
`;

export const TotalWon = styled(Won)`
    color: #21bf48;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const BuyButton = styled(Button)`
    width: 66.03174603174603%;
    margin-top: 3.492063492063492%;
    padding: 3.015873015873016%;
`;

export const CartButton = styled(Button)`
    width: 31.74603174603175%;
    padding: 3.015873015873016%;
    background: #767676;
    align-self: flex-end;
`;
