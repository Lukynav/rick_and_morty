import styles from './TopCard.module.css'

const TopCard = ({ imgUrl, setCharacters, index }) => {
  const onClose = () => {
    setCharacters(state => [...state.slice(0, index), ...state.slice(index + 1)])
  }

  return (
    <div>
      <button onClick={onClose} className={styles.buttonClose}>
        <img className='icon' src='./icons/delete.svg' alt='save icon' />
      </button>
      <img className={styles.img} src={imgUrl} alt='Rick and morty character' />
    </div>
  )
}

export default TopCard
