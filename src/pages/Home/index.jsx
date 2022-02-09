import './home.css'
import { useState } from 'react'
import {FiLink} from 'react-icons/fi'

import Menu from '../../components/Menu'
import LinkShorted from '../../components/LinkShorted'

import api from '../../services/api'
import {saveLink} from '../../storage/links'

function Home() {
  const [link, setLink] = useState('')
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)


  async function handleShortLink() {
    setShowModal(false)

    try {
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data)
      setShowModal(true)

      saveLink("@encurtoorApp", response.data)

      setLink('')
    } catch (error) {
      alert("Algo deu errado!!")
      setLink('')
    }
  }

  return (
    <main className="container-home">

      <section className="logo">
        <img src="src/assets/logo.png" alt="Logo" />
        <h1>Encurtoor</h1>
        <span>Cole seu link para encurtar 👇</span>
      </section>

      <section className="container-input">
        <div>
          <FiLink size={24} color='#fff' />
          <input
            type="text"
            inputMode="url"
            autoCapitalize="off"
            placeholder="Cole seu link aqui"
            value={link}
            onChange={e => setLink(e.target.value)}
          />
        </div>

        <button onClick={handleShortLink}>Encurtar link</button>
      </section>

      <Menu />

      {showModal && <LinkShorted content={data} closeModal={() => setShowModal(false)} />}

    </main>
  )
}

export default Home
