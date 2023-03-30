import { Link } from 'react-router-dom'
import Caracteristic from './Caracteristic/Caracteristic'
import styles from './Card.module.css'
import TopCard from './TopCard/TopCard'

const Card = ({ index, characterObj }) => {
  const { id, imgUrl, name, status, species, gender, origin } = characterObj
  return (
    <article className={styles.article}>
      <TopCard imgUrl={imgUrl} index={index} id={id} />
      <Link to={`/detail/${id}`} style={{ textDecoration: 'none', color: '#000' }}>
        <div className={styles.infoContainer}>
          <h3 className={styles.characterName}>{name}</h3>
          <div className={styles.caracteristics}>
            <Caracteristic iconSrc='icons/favorite.svg' caract={status} />
            <Caracteristic iconSrc='icons/person.svg' caract={species} />
            <Caracteristic iconSrc='icons/gender.svg' caract={gender} />
          </div>
          <div className={styles.firstSeen}>
            <p>First seen in:</p>
            <Caracteristic caract={origin} />
          </div>
        </div>
      </Link>
    </article>
  )
}

export default Card
