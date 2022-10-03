import { registrationNumberRegExp } from '../../../auth/regExp';
import { useAuth } from '../../../auth/useAuth';
import { Input, Label, Strong } from '../Join.style';
import { CertificationButton, RegistrationNumberInput } from './Sellor.style';

const Sellor = (props: any) => {
    const { register, errors, setError, getValues } = props;

    const {
        registrationNumberVerify,
        registrationNumberChecked,
        setRegistrationNumberChecked,
        registrationSuccessMessage,
    } = useAuth();

    return (
        <>
            <Label marginTop={50}>사업자 등록번호</Label>
            <RegistrationNumberInput
                type="number"
                id="company_registration_number"
                {...register('company_registration_number', {
                    required: '필수 정보입니다.',
                    pattern: {
                        value: registrationNumberRegExp,
                        message: '10자의 숫자만 입력가능 합니다.',
                    },
                    onChange: () => {
                        if (registrationNumberChecked) {
                            setRegistrationNumberChecked(false);
                        }
                    },
                })}
            />
            <CertificationButton
                type="button"
                onClick={() => registrationNumberVerify(setError, getValues)}
            >
                인증
            </CertificationButton>
            {errors.company_registration_number && (
                <Strong type="negative">
                    {errors.company_registration_number?.message?.toString()}
                </Strong>
            )}
            {errors.company_registration_number === undefined &&
                registrationNumberChecked && (
                    <Strong type="positive">
                        {registrationSuccessMessage}
                    </Strong>
                )}
            <Label marginTop={16}>스토어 이름</Label>
            <Input
                type="text"
                id="storeName"
                {...register('storeName', {
                    required: '필수 정보입니다.',
                })}
            />
            {errors.storeName && (
                <Strong type="negative">
                    {errors.storeName?.message?.toString()}
                </Strong>
            )}
        </>
    );
};

export default Sellor;
