import { getUser } from '../../localStorage/index';
import { axiosInstance } from '../../axiosInstance/index';
import {
    Button,
    CloseButton,
    ModalContent,
    ModalWrapper,
    PositiveButton,
} from './Modal.style';
import AmountControl from '../button/AmountControl';

const Modal = (props: any) => {
    const { amount, setAmount, setModalOpen, stock } = props;

    const user = getUser();

    const cartItemModify = () => {
        if (!user) return;
        // const { data } = axiosInstance.put('products/');
    };

    return (
        <ModalWrapper>
            <ModalContent>
                <AmountControl
                    width={71.42857142857143}
                    stock={stock}
                    amount={amount}
                    setAmount={setAmount}
                />
                <Button type="button" onClick={() => setModalOpen(false)}>
                    취소
                </Button>
                <PositiveButton type="button" onClick={cartItemModify}>
                    수정
                </PositiveButton>
                <CloseButton onClick={() => setModalOpen(false)} />
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;
