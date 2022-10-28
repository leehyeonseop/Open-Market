import styled from 'styled-components';
import { ReactComponent as Prev } from '../../assets/icons/icon-swiper-1.svg';
import { ReactComponent as Next } from '../../assets/icons/icon-swiper-2.svg';

export const Wrapper = styled.div`
    padding-top: 95px;
`;

export const Image = styled.img`
    height: 26.04166666666667vw;
    object-fit: cover;
`;

export const PreviousButton = styled(Prev)`
    width: 60px;
    height: 124px;
    position: absolute;
    left: 3%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
`;

export const NextButton = styled(Next)`
    width: 60px;
    height: 124px;
    position: absolute;
    top: 50%;
    right: 3%;
    transform: translateY(-50%);
    z-index: 10;
`;
