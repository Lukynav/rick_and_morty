import { Routes, Route } from 'react-router-dom'
import Cards from './components/Cards/Cards'
import Navegation from './components/Navegation/Navegation'
import About from './routes/about/about'
import Detail from './routes/detail/detail'
import Login from './routes/login/login'

const App = () => {
  return (
    <main>
      <Navegation />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Cards />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </main>
  )
}

export default App
