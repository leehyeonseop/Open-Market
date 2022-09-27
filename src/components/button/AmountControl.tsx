import { AmountButton, Count, Wrapper } from './AmountControl.style';

import { ReactComponent as Minus } from '../../assets/icons/icon-minus-line.svg';
import { ReactComponent as Plus } from '../../assets/icons/icon-plus-line.svg';
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';

interface AmountControlProps {
    width: number;
    className?: string;
    stock: number;
    amount: number;
    setAmount: Dispatch<SetStateAction<number>>;
    onClick?: () => void;
}

function AmountControl(props: AmountControlProps) {
    const { width, className, stock, amount, setAmount, onClick } = props;

    return (
        <Wrapper width={width} className={className}>
            <AmountButton
                type="button"
                onClick={onClick ? onClick : () => setAmount(amount - 1)}
                disabled={amount <= 1}
            >
                <Minus />
            </AmountButton>
            <Count>{amount}</Count>
            <AmountButton
                type="button"
                onClick={onClick ? onClick : () => setAmount(amount + 1)}
                disabled={amount >= stock}
            >
                <Plus />
            </AmountButton>
        </Wrapper>
    );
}

export default AmountControl;
