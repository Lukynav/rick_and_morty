import styles from './Caracteristic.module.css'

const Caracteristic = ({ iconSrc, caract }) => {
  return (
    <div className={styles.characterInfo__caract}>
      {iconSrc && <img className='mini-icon' src={iconSrc} alt='heart icon' />}
      <p>{caract}</p>
    </div>
  )
}

export default Caracteristic
