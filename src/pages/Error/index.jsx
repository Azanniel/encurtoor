import './error.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <main className="container-error">
      <img src="src/assets/404.svg" alt="Not found" />

      <h1>Página não encontrada</h1>

      <Link to="/">
        Voltar para o início
      </Link>
    </main>
  )
}

export default Error