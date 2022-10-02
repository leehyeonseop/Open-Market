import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;

export const H1 = styled.h1`
    margin-top: 26px;
    font-weight: 400;
    font-size: 38px;
    line-height: 55px;
`;

export const Strong = styled.strong`
    font-weight: 700;
    font-size: 38px;
    line-height: 55px;
`;

export const P = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.05em;
    margin-top: 10px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 24.16666666666667%;
`;

export const LoginButton = styled.button`
    width: 45%;
    padding: 21px 0;
    background-color: #21bf48;
    border: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: white;
    margin-top: 50px;
    cursor: pointer;
`;

export const HomeButton = styled(LoginButton)`
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    background-color: inherit;
    box-sizing: border-box;
    color: black;
`;
