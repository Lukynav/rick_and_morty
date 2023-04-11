import styles from './detail.module.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams()
  const characters = useSelector(state => state.characters)
  const character = characters.filter(e => e.id === parseInt(id))

  const characterInfo = character[0]
  console.log(characterInfo)
  return (
    <div className={styles.detailContainer}>
      <section className={styles.imageDetail}>
        <img src={characterInfo.image} alt={characterInfo.name} />
      </section>

      <section className={styles.infoDetail}>
        <h3>{characterInfo.name}</h3>
        <h4>About the character</h4>
        <p><b>Species</b>: {characterInfo.species} {characterInfo.type}</p>
        <p><b>Gender</b>: {characterInfo.gender}</p>
        <p><b>Status</b>: {characterInfo.status}</p>
        <p><b>Origin</b>: {characterInfo.origin.name}</p>
        <p><b>Location</b>: {characterInfo.location.name}</p>
      </section>
    </div>
  )
}

export default Detail
