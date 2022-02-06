import './links.css'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import {Link} from 'react-router-dom'

function Links() {
  return (
    <main className="container-links">

      <section className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color='#fff' />
        </Link>
        <h1>Meus encurtoors</h1>
      </section>

      <section className="link-item">
        <button className='link'>
          <span>
            <FiLink size={18} color='#fff' />
          </span>

          https://github.com/azanniel
        </button>

        <button className='link-delete'>
          <FiTrash size={24} color='#b11b1b' />
        </button>
      </section>

      <section className="link-item">
        <button className='link'>
          <span>
            <FiLink size={18} color='#fff' />
          </span>

          https://github.com/azanniel
        </button>

        <button className='link-delete'>
          <FiTrash size={24} color='#b11b1b' />
        </button>
      </section>

    </main>
  )
}

export default Links
