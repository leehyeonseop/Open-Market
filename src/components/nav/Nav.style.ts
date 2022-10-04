import styled from 'styled-components';

export const Wrapper = styled.nav`
    display: flex;
    flex-flow: column nowrap;

    ul {
        li {
            border-radius: 5px;
            &:not(:last-child) {
                margin-bottom: 10px;
            }
            button {
                width: 100%;
                background-color: inherit;
                border: 0;
                border-radius: 5px;
                padding: 15px 20px;
                font-family: 'Spoqa Han Sans Neo';
                text-align: left;
                font-weight: 500;
                font-size: 1rem;
                line-height: 1.125rem;
                &:hover {
                    background-color: #effff3;
                }

                &:focus {
                    background-color: #21bf48;
                    color: white;
                }
            }
        }
    }
`;
