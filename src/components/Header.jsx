export default function Head(props) {
    return (
        <>
            <div >
                <h1 className="header">{props.data.name}</h1>
            </div>
            <div className="contact">
                <p>{props.data.phone}</p>
                <p>{props.data.gmail}</p>
                <p><a href={props.data.github}>Github</a></p>
                <p><a href={props.data.linkedIn}>LinkedIn</a></p>
            </div>
            <div className="summary">
                <h4>SUMMARY</h4>
                <hr />
                <p>{props.data.summary}</p>
            </div>

        </>
    )
}