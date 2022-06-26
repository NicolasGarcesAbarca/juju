import React from 'react'
import { colors } from '../../styles/theme'

const Button = ({ children, onClick }:{children:React.ReactNode, onClick:any}) => {
  return (
    <>
        <button onClick={onClick}>
            {children}
        </button>
        <style jsx>
        {`
            button{
                border:0;
                background:${colors.lightAccent};
                padding: 10px 5px;
                cursor:pointer;
                transition:opacity 0.3s ease-in-out;
            }
        `}
        </style>
    </>
  )
}

export default Button
