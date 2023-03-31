import Cards from '../../components/Cards/Cards'
import FilterSort from '../../components/FilterSort/FilterSort'

const Favorites = ({ characters }) => {
  return (
    <>
      <FilterSort />
      <Cards characters={characters} />
    </>
  )
}

export default Favorites
