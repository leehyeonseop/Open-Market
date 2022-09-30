import {
    Fieldset,
    H3,
    Legend,
    Radio,
    RadioWrapper,
    Wrapper,
} from './PaymentMethod.style';

const PaymentMethod = (props: any) => {
    const { className } = props;

    return (
        <Wrapper className={className}>
            <H3>결제수단</H3>
            <Fieldset>
                <Legend>결제 수단을 선택해주세요</Legend>
                <RadioWrapper>
                    <Radio type="radio" id="credit" name="method" />
                    <label htmlFor="credit">신용/체크카드</label>
                </RadioWrapper>
                <RadioWrapper>
                    <Radio type="radio" id="bankbook" name="method" />
                    <label htmlFor="bankbook">무통장 입금</label>
                </RadioWrapper>
                <RadioWrapper>
                    <Radio type="radio" id="phone" name="method" />
                    <label htmlFor="phone">휴대폰 결제</label>
                </RadioWrapper>
                <RadioWrapper>
                    <Radio type="radio" id="naverpay" name="method" />
                    <label htmlFor="naverpay">네이버페이</label>
                </RadioWrapper>
                <RadioWrapper>
                    <Radio type="radio" id="kakaopay" name="method" />
                    <label htmlFor="kakaopay">카카오페이</label>
                </RadioWrapper>
            </Fieldset>
        </Wrapper>
    );
};

export default PaymentMethod;
