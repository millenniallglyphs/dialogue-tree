export default function Meta() {
    const flex = {
        display: 'flex',
        alignItems: 'flex-end'
    }

    const small = {
        fontSize: '0.8em',
        marginRight: '2em',
        marginTop: '0',
        marginBottom: '0'
    }

    const label = {
        fontSize: '0.8em',
        marginRight: '2em',
        color: '#909090',
        marginTop: '0',
        marginBottom: '0'
    }
    const favicon = {
        height: '12px',
        width: '12px',
        background: '#0500FF',
        marginRight: '2em'
    }

    const metapic = {
        width: '60px',
        marginRight: '2em'
    }

    const metahold = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1em',
        width: '100%',
        boxSizing: 'border-box'
    }

    const btn = {
        border: '1px solid #000',
        padding: '0.5em',
        borderRadius: '2px',
        fontSize: '0.8em',
        background: 'white'
    }

    return (
        <div style={metahold}>
            <div style={flex}>
                <p style={label}>The Meta</p>
                <div style={favicon}></div>
                <p style={small}>www.calvin.ooo</p>
                <p style={small}>Calvin Hutcheon</p>
                <p style={small}>Product</p>
                <p style={small}>Complexity</p>
                <p style={small}>Systems</p>
            </div>
            <button style={btn}>Send me a message</button>
        </div>
    )
}