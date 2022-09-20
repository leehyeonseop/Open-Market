import React from 'react'
import { QueryObserver, useQueryClient } from 'react-query'
import { useRecoilState } from 'recoil'
import { priceState } from '../../atom'
import { CartInfoSection, Payment, Wrapper } from './CartInfo.style'

function CartInfo(props:any) {

    const {testList} = props

    // const queryClient = useQueryClient()
    // const test = queryClient.getQueryData(["products", 1])
    // console.log('테스트 : ', test)
    
    console.log('리스트 : ', testList)

    return  (
        <Wrapper>
            <CartInfoSection>
                총 상품금액
                <strong>
                    <span>원</span>
                </strong>
            </CartInfoSection>
            <CartInfoSection>
                상품 할인
                <strong>
                    0<span>원</span>
                </strong>
            </CartInfoSection>
            <CartInfoSection>
                배송비
                <strong>
                    0<span>원</span>
                </strong>
            </CartInfoSection>
            <Payment>
                결제 예정 금액
                <strong>
                    46,500<span>원</span>
                </strong>
            </Payment>
        </Wrapper>
    )
}

export default CartInfo