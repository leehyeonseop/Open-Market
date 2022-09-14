import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import Button from '../button/Button';

export const MainLogo = styled(Logo)`
    display: block;
    margin: 100px auto 70px auto;
`;

export const Section = styled.section`
    max-width: 550px;
    margin: 0 auto;
`;

export const NavList = styled.li`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    border: 1px solid #c4c4c4;
    border-radius: 10px 10px 0 0;
    text-align: center;
    padding: 19px 0;
    width: 50%;
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
`;

export const Wrapper = styled.div`
    padding: 34px 35px 36px;
    border: 1px solid #c4c4c4;
    border-radius: 0 0 10px 10px;
    border-top: none;
`;

export const Input = styled.input`
    width: 100%;
    padding: 20px 0;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    border: none;
    border-bottom: 1px solid #c4c4c4;
    &:focus {
        outline: none;
    }
    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &::placeholder {
        color: #767676;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
    }
`;

export const ErrorMessage = styled.strong`
    display: block;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #eb5757;
    margin-top: 26px;
    margin-bottom: -10px;
`;

export const LoginButton = styled(Button)`
    width: 100%;
    margin-top: 36px;
    line-height: 22px;
`;

export const JoinWrapper = styled.div`
    margin: 30px auto 354px auto;
    text-align: center;
    line-height: 20px;
`;

export const JoinLink = styled(Link)`
    text-decoration: none;
    margin-right: 14px;
    color: #333333;
`;

export const PassWordFindLink = styled(Link)`
    text-decoration: none;
    margin-left: 14px;
    color: #333333;
`;
