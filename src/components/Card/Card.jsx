import Caracteristic from './Caracteristic/Caracteristic'
import styles from './Card.module.css'
import TopCard from './TopCard/TopCard'

const Card = (props) => {
  const { imgUrl, name, status, species, gender, origin } = props

  return (
    <article className={styles.article}>

      <TopCard imgUrl={imgUrl} />

      <div className={styles.allInfo}>
        <h3 className={styles.characterName}>{name}</h3>
        <div className={styles.characterInfo}>
          <div className={styles.characterInfo__grid}>
            <Caracteristic iconSrc='icons/heart.svg' caract={status} />
            <Caracteristic iconSrc='icons/human.svg' caract={species} />
            <Caracteristic iconSrc='icons/gender.svg' caract={gender} />
          </div>
          <p>First place:</p>
          <Caracteristic caract={origin} />
        </div>
      </div>
    </article>
  )
}

export default Card
