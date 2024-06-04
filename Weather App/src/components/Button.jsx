import React from 'react'

function Button({ 
    
    children,
    type = "button",
    ...props

}) {
    return (
        <button 
        className=' text-3xl'
        {...props}>
            {children}
        </button>
    )
}

export default Button