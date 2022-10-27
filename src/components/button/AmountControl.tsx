import { AmountButton, Count, Wrapper } from './AmountControl.style';

import { ReactComponent as Minus } from '../../assets/icons/icon-minus-line.svg';
import { ReactComponent as Plus } from '../../assets/icons/icon-plus-line.svg';
import { AmountControlProps } from '../../types';

function AmountControl(props: AmountControlProps) {
    const { className, stock, amount, setAmount, onClick } = props;

    return (
        <Wrapper className={className}>
            <AmountButton
                type="button"
                onClick={onClick ? onClick : () => setAmount(amount - 1)}
                disabled={amount <= 1}
            >
                <Minus width={20} height={20} />
            </AmountButton>
            <Count>{amount}</Count>
            <AmountButton
                type="button"
                onClick={onClick ? onClick : () => setAmount(amount + 1)}
                disabled={amount >= stock}
            >
                <Plus width={20} height={20} />
            </AmountButton>
        </Wrapper>
    );
}

export default AmountControl;
