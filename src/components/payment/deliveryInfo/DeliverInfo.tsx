import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import {
    AddressInput,
    DestinationInfo,
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
    StartPhoneInput,
    Wrapper,
} from './DeliveryInfo.style';

type InputProps = {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
};

const DeliveryInfo = (props: InputProps) => {
    const { register, errors } = props;

    return (
        <Wrapper>
            <H3>배송정보</H3>
            <OrdererInfo>
                <H4>주문자 정보</H4>
                <InputBox>
                    <Label htmlFor="name">이름</Label>
                    <Input id="name" type="text" />
                </InputBox>
                <InputBox>
                    <Legend>휴대폰</Legend>
                    <PhoneField>
                        <StartPhoneInput type="tel" />
                        <Span>-</Span>
                        <PhoneInput type="tel" />
                        <Span>-</Span>
                        <PhoneInput type="tel" />
                    </PhoneField>
                </InputBox>
                <InputBox>
                    <Label htmlFor="email">이메일</Label>
                    <Input id="email" type="email" />
                </InputBox>
            </OrdererInfo>
            <DestinationInfo>
                <H4>배송지 정보</H4>
                <InputBox>
                    <Label htmlFor="receiver">수령인</Label>
                    <Input
                        id="receiver"
                        type="text"
                        {...register('receiver', {
                            required: '필수 정보입니다.',
                        })}
                    />
                    {errors.receiver && (
                        <strong>{errors.receiver?.message?.toString()}</strong>
                    )}
                </InputBox>
                <InputBox>
                    <Legend>휴대폰</Legend>
                    <PhoneField>
                        <StartPhoneInput
                            type="tel"
                            {...register('startPhoneNum', {
                                required: '필수 정보입니다.',
                            })}
                        />
                        <Span>-</Span>
                        <PhoneInput
                            type="tel"
                            {...register('centerPhoneNum', {
                                required: '필수 정보입니다.',
                            })}
                        />
                        <Span>-</Span>
                        <PhoneInput
                            type="tel"
                            {...register('endPhoneNum', {
                                required: '필수 정보입니다.',
                            })}
                        />
                    </PhoneField>
                    {(errors.startPhoneNum && (
                        <strong>
                            {errors.startPhoneNum?.message?.toString()}
                        </strong>
                    )) ||
                        (errors.centerPhoneNum && (
                            <strong>
                                {errors.centerPhoneNum?.message?.toString()}
                            </strong>
                        )) ||
                        (errors.endPhoneNum && (
                            <strong>
                                {errors.endPhoneNum?.message?.toString()}
                            </strong>
                        ))}
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
                        <AddressInput
                            id="address"
                            {...register('address', {
                                required: '필수 정보입니다.',
                            })}
                        />
                        <AddressInput />
                        {errors.address && (
                            <strong>
                                {errors.address?.message?.toString()}
                            </strong>
                        )}
                    </PostField>
                </InputBox>
                <InputBox>
                    <Label htmlFor="message">배송 메시지</Label>
                    <MessageInput
                        id="message"
                        type="text"
                        {...register('message', {
                            required: '필수 정보입니다.',
                        })}
                    />
                    {errors.message && (
                        <strong>{errors.message?.message?.toString()}</strong>
                    )}
                </InputBox>
            </DestinationInfo>
        </Wrapper>
    );
};

export default DeliveryInfo;
