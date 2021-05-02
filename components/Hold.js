export default function Hold({children}) {
    const holdStyle = {
        width: '900px',
        padding: '1em',
        margin: 'auto'
    }
    return(
        <div style={holdStyle}>
            {children}
        </div>
    )
}