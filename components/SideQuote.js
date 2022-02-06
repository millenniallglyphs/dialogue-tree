import { useState } from "react"


export default function SideQuote({children}) {
    const[hidden , setHidden] = useState('sideQuote')

    const buttonStyle = {
        background: 'none',
        border: 'none',
        cursor: 'pointer'
    }

    const toggle = () => {
        if (hidden === 'sideQuote') {
            setHidden('underQuote')
        } else if (hidden === 'underQuote') {
            setHidden('sideQuote')
        }
    }

    console.log(hidden)
    return(
        <>
            <button onClick={toggle} style={buttonStyle}>
                <label className="quoteNum" />
            </button>
            <span className={hidden}>
                {children}
            </span>
        </>
    )
} 