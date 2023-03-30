import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import { createCharacterObject } from './createCharacterObj.js'
import styles from './Cards.module.css'

const Cards = () => {
  const characters = useSelector(state => state.characters)
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
