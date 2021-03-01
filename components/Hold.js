export default function Hold({children}) {
    const holdStyle = {
        width: '900px',
        margin: 'auto'
    }
    return(
        <div style={holdStyle}>
            {children}
        </div>
    )
}