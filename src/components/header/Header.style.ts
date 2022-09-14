import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/icon-user.svg';
import { ReactComponent as ShoppingCartIcon } from '../../assets/icons/icon-shopping-cart.svg';

export const Wrapper = styled.header`
    padding: 20px 16.67%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
`;

export const MainLogo = styled(Logo)`
    margin-right: 30px;
    min-width: 50px;
`;

export const User = styled(UserIcon)`
    max-width: 100%;
    height: auto;
`;

export const ShoppingCart = styled(ShoppingCartIcon)`
    max-width: 100%;
    height: auto;
`;

export const Search = styled.input`
    width: 50%;
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
    margin-left: auto;
`;

export const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    &:not(:last-child) {
        margin-right: 26px;
    }
`;

export const Span = styled.span`
    display: block;
    font-size: 12px;
    line-height: 14px;
    color: #767676;
    margin-top: 5px;
`;
