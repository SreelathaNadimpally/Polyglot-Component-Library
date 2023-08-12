// import './button.css';
import React from 'react';

export interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
    primary?: boolean;
    label?: string;
    size: 'small' | 'medium' | 'large';
    backgroundColor?: string;
    name: string;
    mode: string;
    style?: React.CSSProperties;
    variant: 'primary' | 'success' | 'danger' | 'warning';
}

const Button = ({ onClick, disabled, children, size, mode, variant, style, className }: ButtonProps) => {
    const handleClick = () => {
        onClick();
        alert('Button clicked!');
    };

    return (
        <button
            style={{
                color: 'white',
                backgroundColor: '#072196dd',
                borderRadius: 15,
                fontSize: 10,
                padding: 10 ,
                ...style
            }}
            type="button"
            name="ButtonName"
            onClick={handleClick}
            disabled={disabled}
            className={className}
        >
            {children}
        </button>
    );
};

export default Button;
