import styled from 'styled-components';
import { IDropDown } from '../../types';

export const Wrapper = styled.div`
    width: 130px;
    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.25));
    background-color: white;
    border-radius: 10px;
    display: ${(props: IDropDown) => (props.dropDown ? 'block' : 'none')};
    z-index: 1000;
    position: absolute;
    top: 70px;

    ul {
        padding: 10px;
        z-index: 1000;
        position: relative;

        li {
            &:not(:last-child) {
                margin-bottom: 8px;
            }
            button {
                width: 100%;
                padding: 10px 0;
                border: 1px solid transparent;
                box-sizing: border-box;
                background-color: #fff;
                font-family: 'Spoqa Han Sans Neo';
                font-style: normal;
                font-weight: 500;
                font-size: 1rem;
                line-height: 1.25rem;
                color: #767676;
                cursor: pointer;

                &:hover {
                    box-sizing: border-box;
                    border: 1px solid #767676;
                    border-radius: 5px;
                    color: black;
                }
            }
        }
    }

    &::before {
        content: '';
        display: inline-block;
        width: 30px;
        height: 30px;
        clip-path: polygon(50% 25%, 0% 100%, 100% 100%);
        position: absolute;
        top: -25px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;
        filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.25));
        z-index: -100;
    }
`;
