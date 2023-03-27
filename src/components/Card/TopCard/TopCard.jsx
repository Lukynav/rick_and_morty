import styles from './TopCard.module.css'

const TopCard = ({ imgUrl }) => {
  const onClose = () => {
    console.log('onClose CLICKED!')
  }

  return (
    <div>
      <button onClick={onClose} className={styles.button}>
        <img className='icon' src='./icons/save.svg' alt='save icon' />
      </button>
      <img className={styles.img} src={imgUrl} alt='Rick and morty character' />
    </div>
  )
}

export default TopCard
