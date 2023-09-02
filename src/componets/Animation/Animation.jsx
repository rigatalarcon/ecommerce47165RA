import { useRef, useEffect } from "react"

const Button = () => {
    const buttonRef = useRef()
    
    useEffect(() => {
        const buttonEl = buttonRef.current

        const handleClick = () => {
            console.log('me hicieron click')
        }
        console.log('agrego eventlistener')
        buttonEl.addEventListener('click', handleClick)

        return () => {
            console.log('limpio eventlistener')
            buttonEl.removeEventListener('click', handleClick)
        }
    }, [])
    
    return (
        <button ref={buttonRef}>boton</button>
    )
}

export default Button