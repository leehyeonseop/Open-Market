import { useNavigate } from 'react-router-dom';
import { ReactComponent as CheckOn } from '../../assets/icons/icon-check-on.svg';
import {
    ButtonWrapper,
    H1,
    HomeButton,
    LoginButton,
    P,
    Strong,
    Wrapper,
} from './JoinCompletePage.style';

const JoinCompletePage = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <CheckOn width={150} height={150} />
            <H1>
                다음게임 <Strong>회원가입</Strong>이 완료되었습니다.
            </H1>
            <P>
                이제부터 다음게임의 모든 서비스를 이용하실 수 있으며, 소중한
                정보를 보호하기 위해 보안 서비스를 이용해 주세요.
            </P>
            <ButtonWrapper>
                <LoginButton onClick={() => navigate('/login')}>
                    로그인
                </LoginButton>
                <HomeButton onClick={() => navigate('/')}>
                    메인페이지
                </HomeButton>
            </ButtonWrapper>
        </Wrapper>
    );
};

export default JoinCompletePage;
