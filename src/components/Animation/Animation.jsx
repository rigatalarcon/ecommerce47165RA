import { useEffect, useRef, useState } from "react"

const Animation = () => {
    const [color, setColor] = useState('pink')
    const divRef = useRef()

    useEffect(() => {
        const handleScroll = () => {
            const div = divRef.current
            const { y } = div.getBoundingClientRect()
            console.log(y)
            const newColor = y <= 0 ? 'orange' : 'pink'
            setColor(newColor)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            <div ref={divRef} style={{ height: '180vh', background: color}}>
                <h1>Scroll to change background</h1>
            </div>
        </div>
    )
}

export default Animation