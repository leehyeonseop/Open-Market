import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

import checkOff from '../../assets/icons/icon-check-off.svg';
import checkOn from '../../assets/icons/icon-check-on.svg';

import {
    idRegExp,
    pwRegExp,
    startEmailRegExp,
    endEmailRegExp,
    numberRegExp,
} from '../../auth/regExp';

import {
    EmailFieldset,
    Fieldset,
    H2,
    IdInput,
    Input,
    Label,
    Legend,
    PwInput,
    Select,
    Strong,
    IdCheckButton,
    StyledLogo,
    Footer,
    At,
    P,
    FooterWrapper,
    CheckBox,
    JoinButton,
    Wrapper,
    Section,
} from './Join.style';
import { useAuth } from '../../auth/useAuth';
import { useNavigate } from 'react-router-dom';

function Join() {
    const [pwChecked, setPwCheckded] = useState(false);
    const [joinValid, setJoinValid] = useState(false);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        getValues,
        setError,
        formState: { errors, isValid },
    } = useForm({ mode: 'onChange' });

    const { join, idCheck, successMessage, idChecked, setIdChecked } =
        useAuth();

    const onSubmit = handleSubmit((data) => {
        if (!idChecked) {
            alert('아이디 중복체크를 해주세요!');
            return;
        }
        join(setError, data);
    });

    const checkBoxRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!checkBoxRef.current?.checked) return;
        isValid ? setJoinValid(true) : setJoinValid(false);
    }, [isValid]);

    return (
        <>
            <StyledLogo
                width="238px"
                height="74px"
                onClick={() => navigate('/')}
            />
            <Section>
                <H2>구매회원가입</H2>
                <H2>판매회원가입</H2>
                <form onSubmit={onSubmit}>
                    <Wrapper>
                        <Label htmlFor="id">아이디</Label>
                        <IdInput
                            id="id"
                            type="text"
                            {...register('id', {
                                required: '필수 정보입니다.',
                                pattern: {
                                    value: idRegExp,
                                    message:
                                        '20자 이내의 영문 소문자,대문자,숫자만 사용 가능합니다.',
                                },
                                onChange: () => {
                                    if (idChecked) {
                                        setIdChecked(false);
                                    }
                                },
                            })}
                        />
                        <IdCheckButton
                            type="button"
                            text="중복확인"
                            padding={17}
                            onClick={() => idCheck(setError, getValues)}
                        />
                        {errors.id && (
                            <Strong type="negative">
                                {errors.id?.message?.toString()}
                            </Strong>
                        )}
                        {errors.id === undefined && idChecked && (
                            <Strong type="positive">{successMessage}</Strong>
                        )}
                        <Label htmlFor="pw" marginTop={12}>
                            비밀번호
                        </Label>
                        <PwInput
                            id="pw"
                            type="password"
                            background={
                                errors.pw === undefined &&
                                getValues('pw') !== undefined &&
                                getValues('pw') !== ''
                                    ? checkOn
                                    : checkOff
                                // pwChecked ? checkOn : checkOff
                            }
                            {...register('pw', {
                                required: '필수 정보입니다.',
                                pattern: {
                                    value: pwRegExp,
                                    message:
                                        '8자 이상,영문 대 소문자,숫자,특수문자를 사용하세요.',
                                },
                                onBlur: () => {
                                    setPwCheckded((previous) => !previous);
                                },
                            })}
                        />
                        {errors.pw && (
                            <Strong type="negative">
                                {errors.pw?.message?.toString()}
                            </Strong>
                        )}
                        <Label htmlFor="pwCheck" marginTop={12}>
                            비밀번호 재확인
                        </Label>
                        <PwInput
                            id="pwCheck"
                            type="password"
                            background={
                                errors.pwCheck === undefined &&
                                getValues('pwCheck') !== undefined &&
                                getValues('pwCheck') !== ''
                                    ? checkOn
                                    : checkOff
                            }
                            {...register('pwCheck', {
                                required: '필수 정보입니다.',
                                validate: {
                                    same: (pwCheck) =>
                                        pwCheck === getValues('pw') ||
                                        '비밀번호가 일치하지 않습니다.',
                                },
                                onBlur: () => {
                                    setPwCheckded((previous) => !previous);
                                },
                            })}
                        />
                        {errors.pwCheck && (
                            <Strong type="negative">
                                {errors.pwCheck?.message?.toString()}
                            </Strong>
                        )}
                        <Label htmlFor="name" marginTop={20}>
                            이름
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            {...register('name', {
                                required: '필수 정보입니다.',
                            })}
                        />
                        {errors.name && (
                            <Strong type="negative">
                                {errors.name?.message?.toString()}
                            </Strong>
                        )}
                        <Fieldset>
                            <Legend>휴대폰 번호</Legend>
                            <Select {...register('startPhoneNum')}>
                                <option value="010">010</option>
                                <option value="011">011</option>
                                <option value="019">019</option>
                            </Select>
                            <Input
                                type="text"
                                maxLength={4}
                                {...register('centerPhoneNum', {
                                    required: '필수 정보입니다.',
                                    validate: {
                                        number: (inputValue) =>
                                            numberRegExp.test(inputValue) ||
                                            '숫자만 입력해주세요.',
                                    },
                                })}
                            />
                            <Input
                                type="text"
                                maxLength={4}
                                {...register('endPhoneNum', {
                                    required: '필수 정보입니다.',
                                    validate: {
                                        number: (inputValue) =>
                                            numberRegExp.test(inputValue) ||
                                            '숫자만 입력해주세요.',
                                    },
                                })}
                            />
                        </Fieldset>
                        {(errors.centerPhoneNum && (
                            <Strong type="negative">
                                {errors.centerPhoneNum?.message?.toString()}
                            </Strong>
                        )) ||
                            (errors.endPhoneNum && (
                                <Strong type="negative">
                                    {errors.endPhoneNum?.message?.toString()}
                                </Strong>
                            ))}
                        <EmailFieldset>
                            <Legend>이메일</Legend>
                            <Input
                                id="startEmail"
                                type="text"
                                {...register('startEmail', {
                                    required: '필수 정보입니다.',
                                    pattern: {
                                        value: startEmailRegExp,
                                        message: '잘못된 이메일 형식입니다.',
                                    },
                                })}
                            />
                            <At>@</At>
                            <Input
                                id="endEmail"
                                type="text"
                                {...register('endEmail', {
                                    required: '필수 정보입니다.',
                                    pattern: {
                                        value: endEmailRegExp,
                                        message: '잘못된 이메일 형식입니다.',
                                    },
                                })}
                            />
                        </EmailFieldset>
                        {(errors.startEmail && (
                            <Strong type="negative">
                                {errors.startEmail?.message?.toString()}
                            </Strong>
                        )) ||
                            (errors.endEmail && (
                                <Strong type="negative">
                                    {errors.endEmail?.message?.toString()}
                                </Strong>
                            ))}
                    </Wrapper>
                    <Footer>
                        <FooterWrapper>
                            <CheckBox
                                id="checkbox"
                                type="checkbox"
                                ref={checkBoxRef}
                                onChange={(e) => {
                                    if (e.target.checked && isValid) {
                                        setJoinValid(true);
                                    } else {
                                        setJoinValid(false);
                                    }
                                }}
                            />
                            <P>
                                호두샵의 이용약관 및 개인정보처리방침에 대한
                                내용을 확인하였고 동의합니다.
                            </P>
                        </FooterWrapper>
                        <JoinButton
                            text="가입하기"
                            type="submit"
                            disabled={!joinValid}
                        />
                    </Footer>
                </form>
            </Section>
        </>
    );
}

export default Join;
