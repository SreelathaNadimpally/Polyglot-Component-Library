import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import InputField, { InputFieldProps } from '../components/InputField/InputField';

const meta: Meta<InputFieldProps> = {
    title: 'InputField',
    component: InputField,
    args: {
        label: 'Input Field',
        value: '',
        onChange: (value: string) => {
            console.log('Value changed:', value);
        }
    }
};

export default meta;

type InputFieldStoryFn = StoryFn<InputFieldProps>;

export const Base: InputFieldStoryFn = (args) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (value: string) => {
        setInputValue(value);
        console.log('Base Value:', value);
    };

    return <InputField {...args} value={inputValue} onChange={handleInputChange} />;
};

export const WithPlaceholder: InputFieldStoryFn = (args) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (value: string) => {
        setInputValue(value);
        console.log('WithPlaceholder Value:', value);
    };

    return <InputField {...args} value={inputValue} onChange={handleInputChange} placeholder="Type here..." />;
};

export const Disabled: InputFieldStoryFn = (args) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (value: string) => {
        setInputValue(value);
        console.log('Disabled Value:', value);
    };

    return <InputField {...args} value={inputValue} onChange={handleInputChange} disabled={true} />;
};
