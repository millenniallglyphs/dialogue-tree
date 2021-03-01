import Hold from './Hold'

export default function Meta() {
    const flex = {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginTop: '1em',
        marginBottom: '1em'
    }

    const small = {
        fontSize: '0.8em',
        marginRight: '2em',
        marginTop: '0',
        marginBottom: '0',
        color: '#909090'
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
        boxSizing: 'border-box',
        paddingLeft: '4em',
        paddingRight: '4em'
    }

    const btn = {
        border: '1px solid #000',
        padding: '0.5em',
        borderRadius: '2px',
        fontSize: '0.8em',
        background: 'white'
    }

    const home = {
        display: 'flex'
    }

    const target = {
        display: 'flex',
        justifyContent: 'flex-end'
    }

    return (
        <Hold>
            <div style={flex}>
                <div style={home}>
                    <div style={favicon}></div>
                    <p style={small}>www.calvin.ooo</p>
                </div>
                <div style={target}>
                    <p style={small}>Projects</p>
                    <p style={small}>Writing</p>
                </div>
            </div>
            <div />
        </Hold>
    )
}