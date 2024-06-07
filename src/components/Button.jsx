import React from 'react';

export const Button = ({isActive = false, text = '', onClick = () => {}, className}) => {
    return <button onClick={onClick} className={className}>
        <div className={'button-content'}>
            {isActive && <div className={'button-active'}/>}
            <p className={'button-text'}>{text}</p>
        </div>
    </button>
}
