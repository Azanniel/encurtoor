import './links.css'
import { useState, useEffect } from 'react'
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { getLinksSaved, deleteLink } from '../../storage/links'
import LinkShorted from '../../components/LinkShorted'

function Links() {
  const [myLinks, setMyLinks] = useState([])
  const [emptyList, setEmptyList] = useState(false)

  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    async function getLinksFromStorage() {
      const result = await getLinksSaved("@encurtoorApp")

      if (result.length === 0) {
        setEmptyList(true)
        setMyLinks([])
      }else{
        setEmptyList(false)
        setMyLinks(result)
      }
    }

    getLinksFromStorage()
  }, [])

  function handleOpenLink(link) {
    setData(link)
    setShowModal(true)
  }

  async function handleDelete(id) {
    const newLinks = await deleteLink("@encurtoorApp", id)

    if(newLinks.length === 0){
      setEmptyList(true)
      setMyLinks([])
    }else{
      setEmptyList(false)
      setMyLinks(newLinks)
    }

  }

  return (
    <main className="container-links">

      <section className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color='#fff' />
        </Link>
        <h1>Meus encurtoors</h1>
      </section>

      {emptyList && (
        <section className="empty-content">
          <h2>Você não tem encurtoors para resgatar 😥</h2>
        </section>
      )}

      {
        myLinks.map(link => (
          <section key={link.id} className="link-item">
            <button className='link' onClick={() => { handleOpenLink(link) }}>
              <span>
                <FiLink size={18} color='#fff' />
              </span>

              {link.long_url}
            </button>

            <button className='link-delete' onClick={() => handleDelete(link.id)}>
              <FiTrash size={24} color='#b11b1b' />
            </button>
          </section>
        ))
      }

      {showModal && <LinkShorted content={data} closeModal={() => setShowModal(false)} />}

    </main>
  )
}

export default Links
