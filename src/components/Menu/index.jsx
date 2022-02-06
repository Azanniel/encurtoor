import './menu.css'
import {BsGithub} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <section className="container-menu">
      <a className='social' href="https://github.com/azanniel" target="_blank">
        <BsGithub size={28} color='#fff' />
      </a>

      <Link className='menu-item' to="/links">
        Meus encurtoors
      </Link>
    </section>
  )
}

export default Menu