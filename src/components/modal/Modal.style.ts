import styled from 'styled-components';
import { ReactComponent as Close } from '../../assets/icons/icon-delete.svg';

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalContent = styled.div`
    width: 360px;
    /* height: 200px; */
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    padding: 43px 74px 39px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background-color: white;
    z-index: 1000;
    position: relative;
`;

export const Button = styled.button`
    width: 100px;
    height: 40px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #767676;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px 0;
    text-align: center;
    background-color: white;
    margin-right: 10px;
    margin-top: 26px;
    cursor: pointer;
`;

export const PositiveButton = styled(Button)`
    background: #21bf48;
    color: white;
    margin-right: 0;
`;

export const CloseButton = styled(Close)`
    position: absolute;
    top: 18px;
    right: 18px;
    cursor: pointer;
`;
