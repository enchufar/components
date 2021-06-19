import React from 'react'
import './index.css'

export type ButtonProps = {
  text: string;
  variant: 'filled' | 'border' | 'borderless',
  disabled: boolean,
  onClick: React.ClickEventHandler<HTMLButtonElement>
}

const Button = ({ text, variant, disabled = false, onClick = () => {} }: ButtonProps) => {
  return (
    <button className={['buttonn', variant].join(' ')} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button