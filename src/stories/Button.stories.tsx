import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Button, { ButtonProps } from '../components/Button/Button';

const meta: Meta<ButtonProps> = {
    title: 'Button',
    component: Button
};
export default meta;

export const Primary: StoryFn<ButtonProps> = (args) => <Button {...args}>Primary Button</Button>;
Primary.args = {
    variant: 'primary',
    style: {
        backgroundColor: ' #072196dd'
        // height: '30',
        // width: '70',
    }
};

export const Success: StoryFn<ButtonProps> = (args) => <Button {...args}>Success Button</Button>;
Success.args = {
    variant: 'success',
    style: {
        backgroundColor: 'green'
    }
};

export const Warning: StoryFn<ButtonProps> = (args) => <Button {...args}>Warning Button</Button>;
Warning.args = {
    variant: 'warning',
    style: {
        backgroundColor: '#E9D502'
    }
};

export const Danger: StoryFn<ButtonProps> = (args) => <Button {...args}>Danger Button</Button>;
Danger.args = {
    variant: 'danger',
    style: {
        backgroundColor: 'red'
    }
};

export const Small: StoryFn<ButtonProps> = (args) => <Button {...args}>Small Button</Button>;
Small.args = {
    size: 'small',
    style: {
        fontSize: '12px',
        padding: '10px 16px',
        // borderRadius: '10',
    }
};

export const Medium: StoryFn<ButtonProps> = (args) => <Button {...args}>Medium Button</Button>;
Medium.args = {
    size: 'medium',
    style: {
        fontSize: '14px',
        padding: '11px 20px'
    }
};

export const Large: StoryFn<ButtonProps> = (args) => <Button {...args}>Large Button</Button>;
Large.args = {
    size: 'large',
    style: {
        fontSize: '16px',
        padding: '12px 24px'
    }
};
