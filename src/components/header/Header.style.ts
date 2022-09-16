import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';

export const Wrapper = styled.header`
    padding: 20px 16.66666666666667%;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

export const MainLogo = styled(Logo)`
    margin-right: 2.34375%;
    min-width: 50px;
`;

export const Search = styled.input`
    width: 31.25%;
    max-width: 400px;
    border: 2px solid #21bf48;
    border-radius: 50px;
    outline: none;
    padding: 11px 20px;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

export const Nav = styled.nav`
    display: flex;
    width: 10%;
    margin-left: auto;
`;

export const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    &:not(:last-child) {
        margin-right: 20.3125%;
    }
`;

export const Span = styled.span`
    font-size: 12px;
    line-height: 14px;
    color: #767676;
    margin-top: 5px;
    word-break: keep-all;
`;
