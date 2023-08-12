interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
}
import React from 'react';
declare const Button: React.FC<ButtonProps>;
export default Button;
