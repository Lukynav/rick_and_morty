import { Link, useLocation } from 'react-router-dom'
import styles from './Link.module.css'

const Redirect = ({ name, icon, url }) => {
  const location = useLocation()
  let isSelected = false
  if (location.pathname.toLowerCase() === `/${name.toLowerCase()}`) { isSelected = true }
  return (
    <Link to={url} style={{ textDecoration: 'none' }}>
      <li className={`link ${isSelected ? styles.selected : styles.noSelected}`}>
        {icon && <img className='icon' src={icon} alt='icon' />}
        <p className={styles.linkText}>{name}</p>
      </li>
    </Link>

  )
}

export default Redirect
