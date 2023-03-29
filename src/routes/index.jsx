import Cards from '../components/Cards/Cards'

const Index = ({ characters, setCharacters }) => {
  return (
    <section>
      <Cards characters={characters} setCharacters={setCharacters} />
    </section>
  )
}

export default Index
