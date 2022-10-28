import { useState } from 'react';
import {
    CheckBox,
    Dd,
    Dt,
    H3,
    PaymentButton,
    PriceInfoFooter,
    PriceList,
    PriceWrapper,
    Section,
    Wrapper,
} from './FinalPayment.style';

const FinalPayment = (props: any) => {
    const {
        className,
        totalProductPrice,
        totalShippingFee,
        totalPrice,
        isValid,
    } = props;

    const [checked, setChecked] = useState(false);

    return (
        <Section className={className}>
            <H3>최종결제 정보</H3>
            <Wrapper>
                <PriceList>
                    <PriceWrapper>
                        <Dt>- 상품금액</Dt>
                        <Dd>
                            <span>
                                {totalProductPrice.toLocaleString('ko-KR')}
                            </span>
                            원
                        </Dd>
                    </PriceWrapper>
                    <PriceWrapper>
                        <Dt>- 할인금액</Dt>
                        <Dd>
                            <span>0</span>원
                        </Dd>
                    </PriceWrapper>
                    <PriceWrapper>
                        <Dt>- 배송비</Dt>
                        <Dd>
                            <span>
                                {totalShippingFee.toLocaleString('ko-KR')}
                            </span>
                            원
                        </Dd>
                    </PriceWrapper>
                    <PriceWrapper>
                        <Dt>- 결제금액</Dt>
                        <Dd>
                            <strong>
                                {totalPrice.toLocaleString('ko-KR')}원
                            </strong>
                        </Dd>
                    </PriceWrapper>
                </PriceList>
                <PriceInfoFooter>
                    <CheckBox
                        id="agreement"
                        type="checkbox"
                        checked={checked}
                        onChange={() => setChecked((prev) => !prev)}
                    />
                    <label htmlFor="agreement">
                        주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
                    </label>
                    <PaymentButton disabled={!checked}>결제하기</PaymentButton>
                    {/* <PaymentButton>결제하기</PaymentButton> */}
                </PriceInfoFooter>
            </Wrapper>
        </Section>
    );
};

export default FinalPayment;
