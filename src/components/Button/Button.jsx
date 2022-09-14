import React from "react";
import './button.scss'

const Button = ({type, className, text}) => {
    return <button type={type ? type : 'button'} className={className}>{text || 'Default text'}</button>
}

export default Button