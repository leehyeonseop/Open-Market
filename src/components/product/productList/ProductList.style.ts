import styled from 'styled-components';

export const Products = styled.ul`
    display: grid;
    /* grid-template-columns: repeat(3, minmax(auto, auto)); */
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    column-gap: 3.65vw;
    row-gap: 4.06vw;
`;
