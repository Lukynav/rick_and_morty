import styles from '../login.module.css'

const Input = ({label,type='text', changeInput, error}) => {

  return (
      <div className={styles.loginBlock}>
        <label>{label}</label>
        <input onChange={changeInput} type={type} id={label.toLowerCase()} />
        {error && <p>{error}</p>}
      </div>
  )
}

export default Input
