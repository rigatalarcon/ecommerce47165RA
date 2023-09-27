import { useRef, useEffect } from "react"

const Button = () => {
    const buttonRef = useRef()
    
    useEffect(() => {
        const buttonEl = buttonRef.current

        const handleClick = () => {
        
        }
        
        buttonEl.addEventListener('click', handleClick)

        return () => {
            
            buttonEl.removeEventListener('click', handleClick)
        }
    }, [])
    
    return (
        <button ref={buttonRef}>boton</button>
    )
}

export default Button