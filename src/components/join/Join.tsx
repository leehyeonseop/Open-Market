import { AxiosError, AxiosResponse } from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../../axiosInstance/index';

import checkOff from '../../assets/icons/icon-check-off.svg';
import checkOn from '../../assets/icons/icon-check-on.svg';

import {
    EmailFieldset,
    Fieldset,
    H2,
    IdInput,
    Input,
    JoinForm,
    Label,
    Legend,
    PwInput,
    Select,
    Span,
    Strong,
    IdCheckButton,
    StyledLogo,
    Wrapper,
} from './Join.style';

// interface FormData {
//     id: string;
//     pw: string;
//     pwCheck: string;
//     name: string;
//     phoneNumber: string;
//     email: string;
// }

function Join() {
    const [idChecked, setIdChecked] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const {
        register,
        handleSubmit,
        watch,
        getValues,
        setError,
        formState: { errors, isValid },
    } = useForm({ mode: 'onBlur' });

    const onSubmit = handleSubmit((data) => {
        console.log('이건 안되는거지?');
        console.log(data);
    });

    const idCheck = async () => {
        try {
            const { data }: AxiosResponse<{ Success: string }> =
                await axiosInstance.post('accounts/signup/valid/', {
                    username: getValues('id'),
                });
            setIdChecked(true);
            setSuccessMessage(data.Success);
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error.response?.data);
                setError('id', {
                    type: 'idCheck',
                    message: error.response?.data.FAIL_Message,
                });
            }
        }
    };

    return (
        <>
            <StyledLogo width="238px" height="74px" />
            <Wrapper>
                <H2>구매회원가입</H2>
                <H2>판매회원가입</H2>
                <JoinForm onSubmit={onSubmit}>
                    <Label htmlFor="id">아이디</Label>
                    <IdInput
                        id="id"
                        type="text"
                        {...register('id', {
                            required: '필수 정보입니다.',
                            pattern: {
                                value: /^[0-9a-zA-Z]{1,20}$/g,
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
                        }
                        {...register('pw', {
                            required: '필수 정보입니다.',
                            pattern: {
                                value: /^[a-zA-Z0-9!@#$%^&*()_\-\+=[\]{}';":,./<>?]{8,}$/g,
                                message:
                                    '8자 이상,영문 대 소문자,숫자,특수문자를 사용하세요.',
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
                        {...register('name', { required: true })}
                    />
                    {errors.name && (
                        <Strong type="negative">필수 정보입니다.</Strong>
                    )}
                    <Fieldset>
                        <Legend>휴대폰 번호</Legend>
                        <Select>
                            <option value="010">010</option>
                            <option value="011">011</option>
                            <option value="019">019</option>
                        </Select>
                        <Input type="number" {...register('centerPhoneNum')} />
                        <Input type="number" {...register('endPhoneNum')} />
                    </Fieldset>
                    <EmailFieldset>
                        <Legend>이메일</Legend>
                        <Input {...register('startEmail')} />
                        <Span>@</Span>
                        <Input {...register('endEmail')} />
                    </EmailFieldset>
                </JoinForm>
            </Wrapper>
        </>
    );
}

export default Join;
