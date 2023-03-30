export const createCharacterObject = (character) => {
  return {
    id: character.id,
    name: character.name,
    imgUrl: character.image,
    status: character.status,
    gender: character.gender,
    origin: character.origin.name,
    species: character.species
  }
}

/*

    status={character.status}
            imgUrl={character.image}
            name={character.name}
            gender={character.gender}
            origin={character.origin.name}
            species={character.species}
*/
