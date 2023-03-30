import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteCharacterId, addFavorite  } from '../../../redux/actions/actions'
import styles from './TopCard.module.css'

const TopCard = ({ imgUrl, index ,id}) => {
  const [favorite, setFavorite] = useState(false)
  const dispatch = useDispatch()
  const onClose = () => {
    dispatch(deleteCharacterId(index))
  }
  
  const addFav = () => {
    dispatch(addFavorite(id))
  }

  return (
    <div>
      <button onClick={onClose} className={styles.buttonClose}>
        <img className='icon' src='./icons/delete.svg' alt='delete icon' />
      </button>
      {
        !favorite && (
          <button onClick={addFav} className={styles.buttonFavorite}>
            <img className='icon' src='./icons/favorite.svg' alt='delete icon' />
          </button>
        )
      }

      {
        favorite && (
          <button className={styles.buttonFavorite}>
            <img className='icon' src='./icons/favorite_fill.svg' alt='delete icon' />
          </button>
        )
      }
      
      <img className={styles.img} src={imgUrl} alt='Rick and morty character' />
    </div>
  )
}

export default TopCard
