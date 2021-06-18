import React from 'react'

export type ButtonProps = {
  label: string;
  type: 'filled' | 'border' | 'borderless'
}

const Button = ({ label, type }: ButtonProps) => {
  return (
    <>
      Hola {label}
    </>
  )
}

export default Button