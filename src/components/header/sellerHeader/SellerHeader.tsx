import { ReactComponent as Logo } from '../../../assets/icons/Logo.svg';
import { H1, Wrapper } from './SellerHeader.style';

const SellerHeader = () => {
    return (
        <Wrapper>
            <Logo width={80} height={24} />
            <H1>판매자 센터</H1>
        </Wrapper>
    );
};

export default SellerHeader;
