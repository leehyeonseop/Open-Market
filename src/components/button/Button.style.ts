import styled from 'styled-components';

export const MainButton = styled.button<{ padding: number }>`
    color: white;
    text-align: center;
    background-color: #21bf48;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    font-family: 'Spoqa Han Sans Neo';
    line-height: 20px;
    border-radius: 5px;
    cursor: pointer;
    padding-top: ${(props) => props.padding}px;
    padding-bottom: ${(props) => props.padding}px;
`;
