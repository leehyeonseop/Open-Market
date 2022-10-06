import { useNavigate } from 'react-router-dom';

import { H1, StyledLogo, Wrapper } from './SellerHeader.style';

const SellerHeader = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <StyledLogo width={80} height={24} onClick={() => navigate('/')} />
            <H1>판매자 센터</H1>
        </Wrapper>
    );
};

export default SellerHeader;
