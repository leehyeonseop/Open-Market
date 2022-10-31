import { IModalProps } from '../../types';
import {
    Button,
    CloseButton,
    Content,
    ModalContent,
    ModalWrapper,
    PositiveButton,
} from './Modal.style';

const Modal = (props: IModalProps) => {
    const {
        positiveText,
        MainContent,
        negativeText,
        negativeOnClick,
        positiveOnClick,
    } = props;

    return (
        <ModalWrapper>
            <ModalContent>
                <Content>{MainContent}</Content>
                <Button type="button" onClick={negativeOnClick}>
                    {negativeText}
                </Button>
                <PositiveButton type="button" onClick={positiveOnClick}>
                    {positiveText}
                </PositiveButton>
                <CloseButton type="button" onClick={negativeOnClick} />
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;
