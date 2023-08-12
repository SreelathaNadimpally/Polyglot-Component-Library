import React from 'react';
const Button = ({ onClick, disabled, className, children }) => {
    return (React.createElement("button", { onClick: onClick, disabled: disabled, className: className }, children));
};
export default Button;
//# sourceMappingURL=Button.js.map