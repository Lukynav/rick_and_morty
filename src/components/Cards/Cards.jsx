import Card from '../Card/Card'
import { createCharacterObject } from './createCharacterObj.js'
import styles from './Cards.module.css'

const Cards = ({characters}) => {
  return (
    <section className={styles.cardSection}>
      {characters.map((character, index) => {
        return (
          <Card key={index} index={index} characterObj={createCharacterObject(character)} />
        )
      })}
    </section>
  )
}

export default Cards
