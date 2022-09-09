import axios, { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { axiosInstance } from '../../axiosInstance/index';

import checkOff from '../../assets/icons/icon-check-off.svg';
import checkOn from '../../assets/icons/icon-check-on.svg';

import {
    idRegExp,
    pwRegExp,
    startEmailRegExp,
    endEmailRegExp,
    numberRegExp,
} from './regExp';

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

function Join() {
    const [idChecked, setIdChecked] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [pwChecked, setPwCheckded] = useState(false);
    const [joinValid, setJoinValid] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        getValues,
        setError,
        formState: { errors, isValid },
    } = useForm({ mode: 'onBlur' });

    const idCheck = async () => {
        try {
            const { data }: AxiosResponse<{ Success: string }> =
                await axiosInstance.post('accounts/signup/valid/', {
                    username: getValues('id'),
                });
            setIdChecked(true);
            setSuccessMessage(data.Success);
        } catch (error) {
            console.error(error);
            if (error instanceof AxiosError) {
                console.log(error.response?.data);
                setError('id', {
                    type: 'idError',
                    message: error.response?.data.FAIL_Message,
                });
            }
        }
    };

    // interface FormValue {
    //     centerPhoneNum: string;
    //     endEmail: string;
    //     endPhoneNum: string;
    //     id: string;
    //     name: string;
    //     pw: string;
    //     pwCheck: string;
    //     startEmail: string;
    //     startPhoneNum: string;
    // }

    const join = async (data: FieldValues) => {
        const phone_number =
            data.startPhoneNum + data.centerPhoneNum + data.endPhoneNum;

        const reqData = {
            username: data.id,
            password: data.pw,
            password2: data.pwCheck,
            phone_number: phone_number,
            name: data.name,
        };

        try {
            const { data: resData } = await axiosInstance.post(
                'accounts/signup/',
                reqData,
            );

            console.log('resData : ', resData);
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 400) {
                    const errorData = error.response?.data;
                    console.log('errorData : ', errorData);
                    errorData.username &&
                        setError('id', {
                            type: 'idError',
                            message: errorData.username[0],
                        });
                    errorData.phone_number &&
                        setError('centerPhoneNum', {
                            type: 'phoneNumError',
                            message: errorData.phone_number[0],
                        });
                    errorData.password &&
                        setError('pw', {
                            type: 'pwError',
                            message: errorData.password[0],
                        });
                    errorData.password2 &&
                        setError('pwCheck', {
                            type: 'pwCheckError',
                            message: errorData.password2[0],
                        });
                    errorData.name &&
                        setError('name', {
                            type: 'nameError',
                            message: errorData.name[0],
                        });
                } else {
                    console.error(error);
                }
            }
        }
    };

    const onSubmit = handleSubmit((data) => {
        join(data);
    });

    return (
        <>
            <StyledLogo width="238px" height="74px" />
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
                            onClick={idCheck}
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
