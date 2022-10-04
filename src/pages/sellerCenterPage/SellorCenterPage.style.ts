import styled from 'styled-components';

export const Main = styled.main`
    padding: 38px 5.208333333333333% 96px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const H2 = styled.h2`
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 2.75rem;

    & + span {
        font-size: 2.25rem;
        line-height: 2.75rem;
        font-weight: 500;
        color: #21bf48;
        margin-left: 0.9302325581395349%;
    }
`;

export const ProductUploadButton = styled.button`
    display: flex;
    align-items: center;
    margin-left: auto;
    padding: 11px 20px;
    background-color: #21bf48;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    span {
        margin-left: 8px;
        font-weight: 500;
        font-family: 'Spoqa Han Sans Neo';
        font-size: 1.125rem;
        line-height: 1.438rem;
        color: white;
    }
`;
