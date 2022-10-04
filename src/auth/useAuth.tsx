import { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import {
    FieldValues,
    UseFormGetValues,
    UseFormSetError,
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../axiosInstance';
import { setUser } from '../localStorage';

export const useAuth = () => {
    const [idChecked, setIdChecked] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const [registrationNumberChecked, setRegistrationNumberChecked] =
        useState(false);
    const [registrationSuccessMessage, setRegistrationSuccessMessage] =
        useState('');

    const navigate = useNavigate();

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

            console.log('로그인 : ', resData);

            if (resData) {
                setUser(resData);
                navigate('/');
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
        joinType: string,
    ) => {
        const phone_number =
            data.startPhoneNum + data.centerPhoneNum + data.endPhoneNum;

        const buyerReqData = {
            username: data.id,
            password: data.pw,
            password2: data.pwCheck,
            phone_number: phone_number,
            name: data.name,
        };

        const sellorReqData = {
            username: data.id,
            password: data.pw,
            password2: data.pwCheck,
            phone_number: phone_number,
            name: data.name,
            company_registration_number: data.company_registration_number,
            store_name: data.storeName,
        };

        const postURL =
            joinType === 'BUYER'
                ? 'accounts/signup/'
                : 'accounts/signup_seller/';
        const reqData = joinType === 'BUYER' ? buyerReqData : sellorReqData;

        try {
            const { data: resData } = await axiosInstance.post(
                postURL,
                reqData,
            );

            if (resData) navigate('/joinComplete');
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
                    errorData.store_name &&
                        setError('storeName', {
                            type: 'storeNameError',
                            message: errorData.store_name[0],
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
                await axiosInstance.post('accounts/signup/valid/username/', {
                    username: getValues('id'),
                });
            console.log('data : ', data);
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

    const registrationNumberVerify = async (
        setError: UseFormSetError<FieldValues>,
        getValues: UseFormGetValues<FieldValues>,
    ) => {
        try {
            const { data } = await axiosInstance.post(
                'accounts/signup/valid/company_registration_number/',
                {
                    company_registration_number: getValues(
                        'company_registration_number',
                    ),
                },
            );
            if (data) {
                setRegistrationNumberChecked(true);
                setRegistrationSuccessMessage(data.Success);
            }
        } catch (error) {
            console.error(error);
            if (error instanceof AxiosError) {
                setError('company_registration_number', {
                    type: 'registration_number_error',
                    message: error.response?.data.FAIL_Message,
                });
            }
        }
    };

    return {
        login,
        join,
        idCheck,
        registrationNumberVerify,
        idChecked,
        setIdChecked,
        successMessage,
        setSuccessMessage,
        registrationNumberChecked,
        setRegistrationNumberChecked,
        registrationSuccessMessage,
        setRegistrationSuccessMessage,
    };
};
