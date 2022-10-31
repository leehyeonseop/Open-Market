import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 380px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    min-width: 0;
`;

export const Figure = styled.figure`
    padding-top: calc(100% - 2px);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
`;

export const Image = styled.img`
    display: none;
`;

export const Description = styled.div`
    margin-top: 16px;
    display: flex;
    flex-flow: column wrap;
    gap: 10px;
    min-width: 0;
`;

export const Sellor = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #767676;
`;

export const ProductName = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Price = styled.strong`
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
`;

export const Won = styled.span`
    font-size: 16px;
    line-height: 20px;
    margin-left: 2px;
`;
