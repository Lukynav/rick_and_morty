import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './login.module.css'

const Login = () => {
  const [data, setData] = useState({ user: '', password: '' })
  const [error, setError] = useState({})
  const navigate = useNavigate()

  const changeInput = (event) => {
    setData({ ...data, [event.target.id]: event.target.value })
    setError(validate({ ...data, [event.target.id]: event.target.value }))
  }

  const validate = ({ user, password }) => {
    const errorObJ = { user: '', password: '' }
    const emailReguex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const passwordReguex = /[0-9]/
    if (user === '') errorObJ.user = 'The email is required'
    if (!emailReguex.test(user)) errorObJ.user = 'The email is not valid'

    if (!(password.length >= 6 && password.length <= 10)) errorObJ.password = 'should be between 6 and 10 characters'
    if (!passwordReguex.test(password)) errorObJ.password = 'should have almost one number'
    return errorObJ
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!error.user && !error.password) navigate('/home')
    if (error.user && error.password) navigate('/')
  }

  return (
    <form className={styles.formLogin}>
      <h1>Welcome!</h1>

      <div className={styles.loginBlock}>
        <label>Usuario</label>
        <input onChange={changeInput} type='text' id='user' />
        {error.user && <p>{error.user}</p>}
      </div>

      <div className={styles.loginBlock}>
        <label>Contraseña</label>
        <input onChange={changeInput} id='password' type='password' />
        {error.password && <p>{error.password}</p>}
      </div>

      <button onClick={handleSubmit}>Log in</button>
    </form>
  )
}

export default Login
