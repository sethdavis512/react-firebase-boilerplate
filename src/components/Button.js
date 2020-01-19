import React from 'react';
import classnames from 'classnames';

const Button = ({ buttonType, handleClick, text, type = 'button' }) => {
    const buttonClassName = classnames('button', {
        'is-primary': buttonType === 'primary'
    });
    return (
        <button
            className={buttonClassName}
            onClick={handleClick}
            type={type}
        >
            {text}
        </button>
    );
};

export default Button;