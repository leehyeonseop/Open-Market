import { IButtonProps } from '../../types';
import { MainButton } from './Button.style';

function Button(props: IButtonProps) {
    const { type, text, padding, className, onClick, disabled } = props;

    return (
        <MainButton
            type={type}
            onClick={onClick}
            className={className}
            padding={padding}
            disabled={disabled}
        >
            {text}
        </MainButton>
    );
}

export default Button;
