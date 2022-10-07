import styled from 'styled-components';

export const Section = styled.section`
    background: #f2f2f2;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    overflow: hidden;
    min-height: 880px;
    display: flex;
    flex-flow: column nowrap;
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
