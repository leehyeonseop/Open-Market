import styled from 'styled-components';

// interface AmountControlProps {
//     width: number;
// }

export const Wrapper = styled.div`
    width: 150px;
    height: 50px;
    background-color: white;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    display: flex;
    box-sizing: border-box;
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
    font-size: 1.125rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-left: 1px solid #c4c4c4;
    border-right: 1px solid #c4c4c4;
`;
