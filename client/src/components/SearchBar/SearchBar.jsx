import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCharacterId } from '../../redux/actions/actions'
import styles from './SearchBar.module.css'

const SearchBar = () => {
  const [id, setId] = useState(null)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setId(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    dispatch(setCharacterId(id))
  }

  return (
    <form className={styles.article}>
      <input onChange={handleChange} className={styles.search} placeholder='Ex. Rick Sanchez or 1' />
      <button onClick={onSearch} className={styles.searchButton}>Add</button>
    </form>
  )
}

export default SearchBar
