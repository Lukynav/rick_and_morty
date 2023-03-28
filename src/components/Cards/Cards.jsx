import Card from '../Card/Card'
import styles from './Cards.module.css'

const Cards = ({ characters, setCharacters }) => {
  return (
    <section className={styles.cardSection}>
      {characters && characters.map((character, index) => {
        return (
          <Card
            key={index}
            index={index}
            status={character.status}
            imgUrl={character.image}
            name={character.name}
            gender={character.gender}
            origin={character.origin.name}
            species={character.species}
            setCharacters={setCharacters}
          />
        )
      })}

    </section>
  )
}

export default Cards
