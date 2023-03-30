import styles from './Navegation.module.css'
import LINKS_DATA from './Link/Links-data'
import SearchBar from '../SearchBar/SearchBar'
import Redirect from './Link/Link'

const Navegation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        {LINKS_DATA &&
        LINKS_DATA.map((link, index) => {
          return (<Redirect key={index} url={link.url} name={link.name} icon={link.icon} />)
        })}
      </ul>

      <SearchBar />
    </nav>
  )
}

export default Navegation
