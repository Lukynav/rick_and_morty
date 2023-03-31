import { useDispatch } from 'react-redux'
import { filterFavorites, sortFavorites } from '../../redux/actions/actions'
import styles from './FilterSort.module.css'

const FilterSort = () => {
  const dispatch = useDispatch()
  const sort = (event)=>{
    dispatch(sortFavorites(event.target.value))
  }

  const filter = (event)=>{
    dispatch(filterFavorites(event.target.value))
  }
  return (
    <>
      <div className={styles.filterSort}>
        <div className={styles.filter}>
          <p>Sort by:</p>
          <select onChange={sort}>
            <option>Ascendent</option>
            <option>Descendent</option>
          </select>
        </div>

        <div className={styles.filter}>
          <p>Filter by:</p>
          <select onChange={filter} >
            <option>Male</option>
            <option>Female</option>
            <option>Genderless</option>
            <option>unknown</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default FilterSort
