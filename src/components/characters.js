export function Characters ({data, func}) {
    return (
        <div className="characters">
        {data.map((character) => (
            <div key={character.id} onClick={() => func(character)}>
                <img src={character.image} alt={character.name} />
                <p>{character.name}</p>
            </div>
        ))}
    </div>
    )
}