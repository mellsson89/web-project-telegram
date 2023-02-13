import React from 'react';
import styled from './styles/button.module.scss'
const Button = ({children, ...props}) => {
    return (
        <button className={styled.button} style={{...props.style}}>
            {children}
        </button>
    );
};

export default Button;