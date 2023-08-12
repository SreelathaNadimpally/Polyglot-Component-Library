import React from 'react';
export const InputField = ({ label, value, onChange }) => {
    const handleChange = (event) => {
        const newValue = event.target.value;
        onChange(newValue);
    };
    return (React.createElement("div", null,
        React.createElement("label", null, label),
        React.createElement("input", { type: "text", value: value, onChange: handleChange })));
};
//# sourceMappingURL=InputField.js.map