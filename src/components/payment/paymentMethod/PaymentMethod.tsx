import { FieldValues, UseFormRegister } from 'react-hook-form';
import {
    Fieldset,
    H3,
    Legend,
    Radio,
    RadioWrapper,
    Wrapper,
} from './PaymentMethod.style';

interface IPaymentMethod {
    className?: string;
    register: UseFormRegister<FieldValues>;
}

const PaymentMethod = (props: IPaymentMethod) => {
    const { className, register } = props;

    return (
        <Wrapper className={className}>
            <H3>결제수단</H3>
            <Fieldset>
                <Legend>결제 수단을 선택해주세요</Legend>
                <RadioWrapper>
                    <Radio
                        type="radio"
                        id="credit"
                        value="CARD"
                        {...register('paymentMethod')}
                    />
                    <label htmlFor="credit">신용/체크카드</label>
                </RadioWrapper>
                <RadioWrapper>
                    <Radio
                        type="radio"
                        id="bankbook"
                        value="DEPOSIT"
                        {...register('paymentMethod')}
                    />
                    <label htmlFor="bankbook">무통장 입금</label>
                </RadioWrapper>
                <RadioWrapper>
                    <Radio
                        type="radio"
                        id="phone"
                        value="PHONE_PAYMENT"
                        {...register('paymentMethod')}
                    />
                    <label htmlFor="phone">휴대폰 결제</label>
                </RadioWrapper>
                <RadioWrapper>
                    <Radio
                        type="radio"
                        id="naverpay"
                        value="NAVERPAY"
                        {...register('paymentMethod')}
                    />
                    <label htmlFor="naverpay">네이버페이</label>
                </RadioWrapper>
                <RadioWrapper>
                    <Radio
                        type="radio"
                        id="kakaopay"
                        value="KAKAOPAY"
                        {...register('paymentMethod')}
                    />
                    <label htmlFor="kakaopay">카카오페이</label>
                </RadioWrapper>
            </Fieldset>
        </Wrapper>
    );
};

export default PaymentMethod;
