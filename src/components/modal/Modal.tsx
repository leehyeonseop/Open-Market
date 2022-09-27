import {
    Button,
    ModalContent,
    ModalWrapper,
    PositiveButton,
} from './Modal.style';
import AmountControl from '../button/AmountControl';

const Modal = (props: any) => {
    const { amount, setAmount, CenterComponent } = props;

    return (
        <ModalWrapper>
            <ModalContent>
                {/* {CenterComponent} */}
                <AmountControl
                    width={71.42857142857143}
                    stock={30}
                    amount={amount}
                    setAmount={setAmount}
                />
                {/* <strong>상품을 삭제하시겠습니까?</strong> */}
                <Button>취소</Button>
                <PositiveButton>수정</PositiveButton>
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;
