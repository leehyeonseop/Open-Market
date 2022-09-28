import { getUser } from '../../localStorage/index';
import { axiosInstance, getJWTHeader } from '../../axiosInstance/index';
import {
    Button,
    CloseButton,
    ModalContent,
    ModalWrapper,
    PositiveButton,
} from './Modal.style';
import AmountControl from '../button/AmountControl';

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

    const cartItemModify = async (
        cart_item_id: number,
        product_id: number,
        is_active: boolean,
        quantity: number,
    ) => {
        console.log('cart_item_id : ', cart_item_id);
        if (!user) return;
        const modifyData = {
            product_id: product_id,
            quantity: quantity,
            is_active: is_active,
        };
        console.log('modifyData : ', modifyData);
        const { data } = await axiosInstance.put(
            `cart/${cart_item_id}`,
            {
                data: {
                    product_id: product_id,
                    quantity: quantity,
                    is_active: is_active,
                },
            },
            {
                headers: getJWTHeader(user),
            },
        );
        console.log('수정됩니까? : ', data);
        return data;
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
                    onClick={() =>
                        cartItemModify(
                            cart_item_id,
                            product_id,
                            is_active,
                            quantity,
                        )
                    }
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
