import { useState } from 'react';
import { useForm } from 'react-hook-form';
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

    const {
        register,
        formState: { errors },
        setError,
        handleSubmit,
    } = useForm({ mode: 'onBlur' });

    const { login } = useAuth();

    const onSubmit = handleSubmit((data) => {
        login(setError, data, login_type);
    });

    return (
        <>
            <MainLogo width="238px" height="74px" />
            <Section>
                <nav>
                    <ul>
                        <NavList>구매회원 로그인</NavList>
                        <NavList>판매회원 로그인</NavList>
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
