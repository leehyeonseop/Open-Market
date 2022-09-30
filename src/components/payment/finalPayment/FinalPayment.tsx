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
    const { className } = props;

    return (
        <Section className={className}>
            <H3>최종결제 정보</H3>
            <Wrapper>
                <PriceList>
                    <PriceWrapper>
                        <Dt>- 상품금액</Dt>
                        <Dd>
                            <span>46,500</span>원
                        </Dd>
                    </PriceWrapper>
                    <PriceWrapper>
                        <Dt>- 할인금액</Dt>
                        <Dd>
                            <span>46,500</span>원
                        </Dd>
                    </PriceWrapper>
                    <PriceWrapper>
                        <Dt>- 배송비</Dt>
                        <Dd>
                            <span>46,500</span>원
                        </Dd>
                    </PriceWrapper>
                    <PriceWrapper>
                        <Dt>- 결제금액</Dt>
                        <Dd>
                            <strong>46,500원</strong>
                        </Dd>
                    </PriceWrapper>
                </PriceList>
                <PriceInfoFooter>
                    <CheckBox id="agreement" type="checkbox" />
                    <label htmlFor="agreement">
                        주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
                    </label>
                    <PaymentButton>결제하기</PaymentButton>
                </PriceInfoFooter>
            </Wrapper>
        </Section>
    );
};

export default FinalPayment;
