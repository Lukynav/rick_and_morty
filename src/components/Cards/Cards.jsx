import Card from '../Card/Card'
import styles from './Cards.module.css'

const Cards = ({ characters }) => {
  return (
    <section className={styles.section}>
      {characters && characters.map((character, index) => {
        return (
          <Card
            key={index}
            status={character.status}
            imgUrl={character.image}
            name={character.name}
            gender={character.gender}
            origin={character.origin.name}
            species={character.species}
          />
        )
      })}

    </section>
  )
}

export default Cards
