export function Modal({ func, data }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <img src={data.image} alt={data.name} />
                <div className="right">
                    <div className="info">
                        <div>
                            <p>
                                <span>Name: </span>
                                {data.name}
                            </p>
                            <p>
                                <span>Gender: </span>
                                {data.gender}
                            </p>
                            <p>
                                <span>Status: </span>
                                {data.status}
                            </p>
                        </div>
                        <div>
                            <p>
                                <span>Species: </span>
                                {data.species}
                            </p>
                            <p>
                                <span>Origin: </span>
                                {data.origin.name}
                            </p>
                            <p>
                                <span>Location: </span>
                                {data.location.name}
                            </p>
                        </div>
                    </div>
                    <button className="close" onClick={func}>
                        Close
                    </button>
                </div>

            </div>
        </div>

    )
}