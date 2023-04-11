import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Caracteristic from './Caracteristic/Caracteristic'
import styles from './Card.module.css'
import TopCard from './TopCard/TopCard'

const Card = ({ index, characterObj }) => {
  const { id, imgUrl, name, status, species, gender, origin } = characterObj
  const favorites = useSelector(state => state.favorites)
  const [fav, setFav] = useState(false)

  useEffect(() => {
    setFav(false)
    const isFav = favorites.filter(el => el.id === id)
    if (isFav.length === 1) setFav(true)
  }, [favorites, fav, id])

  return (
    <article className={styles.article}>
      <TopCard imgUrl={imgUrl} index={index} id={id} fav={fav} />
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
