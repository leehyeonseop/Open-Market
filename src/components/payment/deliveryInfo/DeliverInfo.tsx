import {
    AddressInput,
    DestinationInfo,
    FirstPhoneInput,
    H3,
    H4,
    Input,
    InputBox,
    Label,
    Legend,
    MessageInput,
    OrdererInfo,
    PhoneField,
    PhoneInput,
    PostCodeInput,
    PostCodeWrapper,
    PostField,
    SearchButton,
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
            <DestinationInfo>
                <H4>배송지 정보</H4>
                <InputBox>
                    <Label>수령인</Label>
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
                    <Legend>배송주소</Legend>
                    <PostField>
                        <PostCodeWrapper>
                            <PostCodeInput />
                            <SearchButton type="button">
                                우편번호 조회
                            </SearchButton>
                        </PostCodeWrapper>
                        <AddressInput />
                        <AddressInput />
                    </PostField>
                </InputBox>
                <InputBox>
                    <Label>배송 메시지</Label>
                    <MessageInput type="text" />
                </InputBox>
            </DestinationInfo>
        </Wrapper>
    );
};

export default DeliveryInfo;
