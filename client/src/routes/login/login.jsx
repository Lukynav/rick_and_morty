import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './login.module.css'
import { validate } from '../../utils/login'
import Input from './input/Input'

const Login = () => {
  const [credentials, setCredentials] = useState({ user: '', password: '' })
  const [error, setError] = useState({})
  const navigate = useNavigate()

  const changeInput = (event) => {
    setCredentials({ ...credentials, [event.target.id]: event.target.value })
    setError(validate({ ...credentials, [event.target.id]: event.target.value }))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!error.user && !error.password) navigate('/home')
    if (error.user && error.password) navigate('/')
  }

  return (
    <form className={styles.formLogin}>
      <h1>Welcome!</h1>
      <Input label={'User'} changeInput={changeInput} error={error.user} />
      <Input label={'Password'} changeInput={changeInput} error={error.password} type={'password'} />
      <button onClick={handleSubmit}>Log in</button>
    </form>
  )
}

export default Login
