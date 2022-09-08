import React from 'react';
import { MainButton } from './Button.style';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    text: string;
    padding?: number;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

function Button(props: ButtonProps) {
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
