import React, { ChangeEvent } from 'react';

export interface InputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean; 
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, placeholder, disabled }) => {
    
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        onChange(newValue);
    };

    return (
        <div>
            <label>{label}</label>
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
                disabled={disabled} 
            />
        </div>
    );
};

export default InputField;
