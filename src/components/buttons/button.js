export function Button(props) {
   const {onClick, children} = props;
    return (
        <>
            <button onClick={onClick}
                className="btn"
            >{children}</button>
        </>
    )
}