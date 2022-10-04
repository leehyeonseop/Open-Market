import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/useAuth';

import {
    ErrorMessage,
    Input,
    JoinLink,
    JoinWrapper,
    LoginButton,
    MainLogo,
    NavList,
    PassWordFindLink,
    Section,
    Wrapper,
} from './Login.style';

function Login() {
    const [login_type, setLoginType] = useState('BUYER');

    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        setError,
        handleSubmit,
    } = useForm({ mode: 'onBlur' });

    const buyerLoginRef = useRef<HTMLLIElement>(null);
    const sellorLoginRef = useRef<HTMLLIElement>(null);

    const { login } = useAuth();

    const onSubmit = handleSubmit((data) => {
        login(setError, data, login_type);
    });

    useEffect(() => {
        if (login_type === 'BUYER') {
            buyerLoginRef.current!.style.backgroundColor = 'white';
            sellorLoginRef.current!.style.backgroundColor = '#f2f2f2';
        } else {
            buyerLoginRef.current!.style.backgroundColor = '#f2f2f2';
            sellorLoginRef.current!.style.backgroundColor = 'white';
        }
    }, [login_type]);

    return (
        <>
            <MainLogo
                width="238px"
                height="74px"
                onClick={() => navigate('/')}
            />
            <Section>
                <nav>
                    <ul>
                        <NavList
                            ref={buyerLoginRef}
                            onClick={() => setLoginType('BUYER')}
                        >
                            구매회원 로그인
                        </NavList>
                        <NavList
                            ref={sellorLoginRef}
                            onClick={() => setLoginType('SELLER')}
                        >
                            판매회원 로그인
                        </NavList>
                    </ul>
                </nav>
                <form onSubmit={onSubmit}>
                    <Wrapper>
                        <Input
                            id="id"
                            type="text"
                            placeholder="아이디"
                            {...register('id', {
                                required: '아이디를 입력해 주세요.',
                            })}
                        />
                        <Input
                            id="pw"
                            type="password"
                            placeholder="비밀번호"
                            {...register('pw', {
                                required: '비밀번호를 입력해 주세요.',
                            })}
                        />
                        {(errors.id && (
                            <ErrorMessage>
                                {errors.id.message?.toString()}
                            </ErrorMessage>
                        )) ||
                            (errors.pw && (
                                <ErrorMessage>
                                    {errors.pw.message?.toString()}
                                </ErrorMessage>
                            ))}
                        <LoginButton text="로그인" type="submit" padding={19} />
                    </Wrapper>
                </form>
            </Section>
            <JoinWrapper>
                <JoinLink to="/join">회원가입</JoinLink>
                <span>|</span>
                <PassWordFindLink to="/">비밀번호 찾기</PassWordFindLink>
            </JoinWrapper>
        </>
    );
}

export default Login;
