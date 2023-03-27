import styles from './Link.module.css'

const Link = ({ name, icon, isSelected }) => {

  return (

    <div className={isSelected ? styles.selected : styles.link}>
      <img className='icon' src={icon} alt='icon' />
      <p>{name}</p>
    </div>
    
  )
}

export default Link
