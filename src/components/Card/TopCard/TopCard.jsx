import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCharacterId, addFavorite, removeFavorite  } from '../../../redux/actions/actions'
import styles from './TopCard.module.css'

const TopCard = ({ imgUrl, index ,id}) => {
  const [fav, setFav] = useState(false)
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites)

  useEffect(()=>{
    const isFav = favorites.filter(el => el.id === id)
    if(isFav.length === 1) setFav(true)
  }, [])
  
  return (
    <div>
      <button onClick={()=>onClose(dispatch, index)} className={styles.buttonClose}>
        <img className='icon' src='./icons/delete.svg' alt='delete icon' />
      </button>
      {!fav && (
          <button onClick={()=>addFav(dispatch, id, setFav)} className={styles.buttonFavorite}>
            <img className='icon' src='./icons/favorite.svg' alt='delete icon' />
          </button>
        )}
      {fav && (
          <button onClick={()=>removeFav(setFav, dispatch,id)} className={styles.buttonFavorite}>
            <img className='icon' src='./icons/favorite_fill.svg' alt='delete icon' />
          </button>
        )}

      <img className={styles.img} src={imgUrl} alt='Rick and morty character' />
    </div>
  )
}

const onClose = (dispatch, index) => {
  dispatch(deleteCharacterId(index))
}

const addFav = (dispatch, id, setFav) => {
  dispatch(addFavorite(id))
  setFav(true)
}

const removeFav = (setFav, dispatch, id) => {
  dispatch(removeFavorite(id))
  setFav(false)
}

export default TopCard