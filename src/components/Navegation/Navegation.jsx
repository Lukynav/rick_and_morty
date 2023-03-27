import Link from './Link/Link'
import styles from './Navegation.module.css'
import LINKS_DATA from './Link/Links-data'

const Navegation = () => {
  return (
    <nav className={styles.nav}>

      <div className={styles.nav__container}>

        <div className={styles.links}>
          {
            LINKS_DATA && LINKS_DATA.map((link, index) => {
              return (
                <Link key={index} isSelected={false} name={link.name} icon={link.icon} />
              )
            })
          }
        </div>

      </div>

    </nav>
  )
}

export default Navegation