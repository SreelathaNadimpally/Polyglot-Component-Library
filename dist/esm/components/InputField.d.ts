import React from 'react';
interface InputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}
export declare const InputField: React.FC<InputFieldProps>;
export {};
