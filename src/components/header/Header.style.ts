import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/icon-user.svg';
import { ReactComponent as ShoppingCartIcon } from '../../assets/icons/icon-shopping-cart.svg';
import { ReactComponent as ShoppingBagIcon } from '../../assets/icons/icon-shopping-bag.svg';

export const Wrapper = styled.header`
    padding: 22px 16.66666666666667%;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

export const MainLogo = styled(Logo)`
    margin-right: 2.34375%;
    min-width: 50px;
    cursor: pointer;
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
    align-items: center;
    margin-left: auto;
    gap: 1.354166666666667vw;
`;

export const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
`;

export const Button = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    border: 0;
    background-color: #fff;
    padding: 0;
    cursor: pointer;
    position: relative;
`;

export const Span = styled.span`
    font-family: 'Spoqa Han Sans Neo';
    font-size: 12px;
    line-height: 14px;
    color: #767676;
    margin-top: 5px;
    word-break: keep-all;
`;

export const SellerCenterLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 8.75vw; */
    width: 168px;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.438rem;
    text-decoration: none;
    color: white;
    text-align: center;
    padding: 11px 0;
    background: #21bf48;
    border-radius: 5px;
    svg {
        margin-right: 8px;
    }
`;

export const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
    &:hover {
        path {
            stroke: #21bf48;
        }

        & + span {
            color: #21bf48;
        }
    }
`;

export const StyledUserIcon = styled(UserIcon)`
    &:hover {
        path {
            stroke: #21bf48;
        }

        & + span {
            color: #21bf48;
        }
    }
`;
