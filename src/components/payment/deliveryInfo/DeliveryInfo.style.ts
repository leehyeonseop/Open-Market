import styled from 'styled-components';

export const Wrapper = styled.section`
    margin-top: 96px;
`;

export const H3 = styled.h3`
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.875rem;
    padding-bottom: 18px;
    border-bottom: 2px solid #c4c4c4;
`;

export const OrdererInfo = styled.div`
    margin-top: 40px;
`;

export const H4 = styled.h4`
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.438rem;
    padding-bottom: 8px;
    border-bottom: 2px solid #c4c4c4;
`;

export const InputBox = styled.div`
    padding: 8px 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #c4c4c4;

    strong {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #eb5757;
        margin-left: 10px;
    }
`;

export const Label = styled.label`
    width: 13.28125%;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
`;

export const Input = styled.input`
    width: 26.09375%;
    border: 1px solid #c4c4c4;
    padding: 11px 5px;
    outline: none;
    box-sizing: border-box;
`;

export const Legend = styled.legend`
    width: 13.28125%;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
`;

export const PhoneField = styled.fieldset`
    width: 26.09375%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StartPhoneInput = styled(Input)`
    width: 23.95209580838323%;
`;

export const PhoneInput = styled(Input)`
    width: 29.94011976047904%;
`;

export const Span = styled.span`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
`;

export const DestinationInfo = styled.div`
    margin-top: 40px;
`;

export const PostField = styled.fieldset`
    width: 62.5%;
    box-sizing: border-box;
`;

export const PostCodeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 41.75%;
    box-sizing: border-box;
    margin-bottom: 8px;
`;

export const PostCodeInput = styled(Input)`
    width: 50.89820359281437%;
`;

export const SearchButton = styled.button`
    width: 46.10778443113772%;
    padding: 10px 0;
    background-color: #21bf48;
    border-radius: 5px;
    border: none;
    color: white;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.25rem;
    cursor: pointer;
`;

export const AddressInput = styled(Input)`
    width: 100%;
    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;

export const MessageInput = styled(Input)`
    width: 62.5%;
`;
