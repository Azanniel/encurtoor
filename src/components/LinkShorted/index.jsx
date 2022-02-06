import './link-shorted.css'
import {FiX, FiClipboard} from 'react-icons/fi'

function LinkShorted({ content, closeModal }) {

  async function copyLink() {
    await navigator.clipboard.writeText(content.link)
    alert("Copiado com sucesso! 😉")
  }

  return (
    <main className="container-modal">

      <section className="modal-header">
        <h2>Link encurtado</h2>

        <button onClick={closeModal}>
          <FiX size={28} color='#333' />
        </button>
      </section>

      <span>{content.long_url}</span>

      <button className='modal-link' onClick={copyLink}>
        {content.link}

        <FiClipboard size={20} color='#fff' />
      </button>

    </main>
  )
}

export default LinkShorted