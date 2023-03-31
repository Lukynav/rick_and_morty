import Card from '../Card/Card'
import { createCharacterObject } from './createCharacterObj.js'
import styles from './Cards.module.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { resetFavorites } from '../../redux/actions/actions'

const Cards = ({ characters }) => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(resetFavorites())
  },[])
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
