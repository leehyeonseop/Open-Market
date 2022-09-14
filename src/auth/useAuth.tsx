import { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import {
    FieldValues,
    UseFormGetValues,
    UseFormSetError,
} from 'react-hook-form';
import { axiosInstance } from '../axiosInstance';
import { setToken } from '../localStorage';

export const useAuth = () => {
    const [idChecked, setIdChecked] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const login = async (
        setError: UseFormSetError<FieldValues>,
        data: FieldValues,
        login_type: string,
    ) => {
        const reqData = {
            username: data.id,
            password: data.pw,
            login_type: login_type,
        };

        try {
            const { data: resData } = await axiosInstance.post(
                'accounts/login/',
                reqData,
            );

            if (resData.token) {
                setToken(resData.token);
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 401) {
                    setError('pw', {
                        type: 'loginError',
                        message: '아이디 또는 비밀번호가 일치하지 않습니다.',
                    });
                } else {
                    console.error(error);
                }
            }
        }
    };

    const join = async (
        setError: UseFormSetError<FieldValues>,
        data: FieldValues,
    ) => {
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

    const idCheck = async (
        setError: UseFormSetError<FieldValues>,
        getValues: UseFormGetValues<FieldValues>,
    ) => {
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

    return {
        login,
        join,
        idCheck,
        idChecked,
        setIdChecked,
        successMessage,
        setSuccessMessage,
    };
};
