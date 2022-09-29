import {
    FirstPhoneInput,
    H3,
    H4,
    Input,
    InputBox,
    Label,
    Legend,
    OrdererInfo,
    PhoneField,
    PhoneInput,
    Span,
    Wrapper,
} from './DeliveryInfo.style';

const DeliveryInfo = () => {
    return (
        <Wrapper>
            <H3>배송정보</H3>
            <OrdererInfo>
                <H4>주문자 정보</H4>
                <InputBox>
                    <Label>이름</Label>
                    <Input type="text" />
                </InputBox>
                <InputBox>
                    <Legend>휴대폰</Legend>
                    <PhoneField>
                        <FirstPhoneInput type="tel" />
                        <Span>-</Span>
                        <PhoneInput type="tel" />
                        <Span>-</Span>
                        <PhoneInput type="tel" />
                    </PhoneField>
                </InputBox>
                <InputBox>
                    <Label>이메일</Label>
                    <Input type="email" />
                </InputBox>
            </OrdererInfo>
        </Wrapper>
    );
};

export default DeliveryInfo;
