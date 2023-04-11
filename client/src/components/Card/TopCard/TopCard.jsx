import { useDispatch } from 'react-redux'
import { deleteCharacterId, addFavorite, removeFavorite } from '../../../redux/actions/actions'
import styles from './TopCard.module.css'

const TopCard = ({ imgUrl, id, fav }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => onClose(dispatch, id)} className={styles.buttonClose}>
        <img className='icon' src='./icons/delete.svg' alt='delete icon' />
      </button>
      {!fav && (
        <button onClick={() => addFav(dispatch, id)} className={styles.buttonFavorite}>
          <img className='icon' src='./icons/favorite.svg' alt='delete icon' />
        </button>
      )}
      {fav && (
        <button onClick={() => removeFav(dispatch, id)} className={styles.buttonFavorite}>
          <img className='icon' src='./icons/favorite_fill.svg' alt='delete icon' />
        </button>
      )}

      <img className={styles.img} src={imgUrl} alt='Rick and morty character' />
    </div>
  )
}

const onClose = (dispatch, id) => {
  dispatch(deleteCharacterId(id))
}

const addFav = (dispatch, id) => {
  dispatch(addFavorite(id))
}

const removeFav = (dispatch, id) => {
  dispatch(removeFavorite(id))
}

export default TopCard
