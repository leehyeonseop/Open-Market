import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

export const Section = styled.section`
    background: #f2f2f2;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    /* overflow: hidden;
    overflow: scroll; */
    /* min-height: 880px; */
    /* height: 880px; */
`;

export const ProductOnSaleHeader = styled.div`
    display: flex;
    padding: 18px 2.083333333333333%;
    border-bottom: 1px solid #c4c4c4;
    background-color: #fff;
    span {
        text-align: center;
    }

    span:nth-child(1) {
        width: 51.31944444444444%;
    }
    span:nth-child(2) {
        width: 23.68055555555556%;
    }
    span:nth-child(3) {
        margin-left: auto;
        width: 5.555555555555556%;
    }
    span:nth-child(4) {
        margin-left: 4.166666666666667%;
        width: 5.555555555555556%;
    }
`;

export const ProductOnSaleList = styled.ul`
    height: calc(100% - 53px);
    /* overflow-y: scroll; */
`;

export const ProductOnSaleItem = styled.li`
    display: flex;
    align-items: center;
    padding: 16px 2.083333333333333%;
    background-color: #fff;
    border-bottom: 1px solid #c4c4c4;
    div:nth-child(1) {
        width: 51.31944444444444%;
        display: flex;

        & + strong {
            width: 23.68055555555556%;
            font-weight: 400;
            font-size: 1.125rem;
            line-height: 1.375rem;
            text-align: center;
        }
    }

    figure {
        border-radius: 50%;
        width: 9.472259810554804%;
        padding-top: 9.472259810554804%;
        margin-right: 4.059539918809202%;
        background-image: url('https://openmarket.weniv.co.kr/media/products/2022/09/21/%E1%84%8E%E1%85%B5%E1%86%AF%E1%84%85%E1%85%B5_%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        img {
            display: none;
        }

        & + div {
            display: flex;
            flex-flow: column nowrap;
            width: 34.72222222222222%;
            justify-content: center;

            span:last-child {
                color: #767676;
                margin-top: 10px;
            }
        }
    }

    button {
        width: 5.555555555555556%;
        padding: 10px 0;
        border-radius: 5px;
        background-color: #21bf48;
        border: 0;
        color: white;
        cursor: pointer;
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.25rem;
    }

    button:nth-of-type(1) {
        margin-left: auto;
    }

    button:last-child {
        border: 1px solid #c4c4c4;
        background-color: #fff;
        box-sizing: border-box;
        color: #767676;
        margin-left: 4.166666666666667%;

        &:hover {
            border-color: #767676;
            color: black;
        }
    }
`;

export const StyledInfiniteScroller = styled(InfiniteScroll)`
    /* height: 500px;
    overflow-y: scroll; */
`;
