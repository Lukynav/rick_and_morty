import Cards from './components/Cards/Cards'
import Navegation from './components/Navegation/Navegation'
import data from './data'

const App = () => {
  return (
    <main>

      <Navegation />

      <section>
        <Cards characters={data} />
      </section>

    </main>
  )
}

export default App
