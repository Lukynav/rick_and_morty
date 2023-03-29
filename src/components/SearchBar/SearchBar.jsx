import { useState } from 'react'
import styles from './SearchBar.module.css'

const SearchBar = ({ setCharacters }) => {
  const [value, setValue] = useState(null)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()

    fetch(`https://rickandmortyapi.com/api/character/${value}`)
      .then(res => res.json())
      .then(data => {
        setCharacters(state => [...state, data])
      })
  }

  return (
    <form className={styles.article}>
      <input onChange={handleChange} className={styles.search} placeholder='Ex. Rick Sanchez' />
      <button onClick={onSearch} className={styles.searchButton}>Add</button>
    </form>
  )
}

export default SearchBar
