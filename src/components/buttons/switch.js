import './switch.css'

export function Switch({ func }) {
    return (
    <>
        <label className="switch">
            <input onClick={func} type="checkbox" />
            <span className="slider round"></span>
        </label>
    </>
    )
}



