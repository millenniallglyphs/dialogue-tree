export default function Hold({children}) {
    const holdStyle = {
        width: '100%',
        padding: '1em',
        margin: 'auto'
    }
    return(
        <div style={holdStyle}>
            {children}
        </div>
    )
}