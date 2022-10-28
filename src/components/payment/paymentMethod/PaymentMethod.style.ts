import styled from 'styled-components';

export const Wrapper = styled.section``;

export const H3 = styled.h3`
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.875rem;
    padding-bottom: 18px;
    border-bottom: 2px solid #c4c4c4;
`;

export const Fieldset = styled.fieldset`
    padding: 18px 0;
    display: flex;
    justify-content: space-between;
    & + strong {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #eb5757;
        margin-left: 10px;
    }
`;

export const Legend = styled.legend`
    display: block;
    overflow: hidden;
    font-size: 1px;
    line-height: 0;
    text-indent: -9999px;
`;

export const RadioWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Radio = styled.input`
    margin: 0;
    height: 20px;
    width: 20px;
    appearance: none;
    -webkit-appearance: none;
    border: 0.2rem solid white;
    border-radius: 50%;
    outline: 2px solid #c4c4c4;
    cursor: pointer;
    background-color: white;
    margin-right: 10px;
    &:checked {
        background-color: #21bf48;
        outline: 2px solid #21bf48;
    }
`;
