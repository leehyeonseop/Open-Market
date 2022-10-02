import { getUser } from '../../localStorage/index';
import {
    Button,
    CloseButton,
    ModalContent,
    ModalWrapper,
    PositiveButton,
} from './Modal.style';
import AmountControl from '../button/AmountControl';
import { useAmountModify } from '../../hooks/useAmountModify';
import { IModifyData } from '../../types';

const Modal = (props: any) => {
    const {
        amount,
        setAmount,
        setModalOpen,
        stock,
        quantity,
        is_active,
        cart_item_id,
        product_id,
    } = props;

    const user = getUser();
    const amountModify = useAmountModify();
    const modifyData: IModifyData = {
        user: user,
        cart_item_id: cart_item_id,
        product_id: product_id,
        is_active: is_active,
        amount: amount,
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
                <Button
                    type="button"
                    onClick={() => {
                        setModalOpen(false);
                        setAmount(quantity);
                    }}
                >
                    취소
                </Button>
                <PositiveButton
                    type="button"
                    onClick={() => {
                        amountModify(modifyData);
                        setModalOpen(false);
                    }}
                >
                    수정
                </PositiveButton>
                <CloseButton
                    onClick={() => {
                        setModalOpen(false);
                        setAmount(quantity);
                    }}
                />
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;
