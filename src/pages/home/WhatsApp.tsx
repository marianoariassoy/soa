import { WhatsApp } from '../../components/icons'
import { whatsapp } from '../../components/data'

const WaComponent = () => {
  return (
    <a
      href={whatsapp.phone}
      target='_blank'
      rel='noreferrer'
      className='fixed z-40 bottom-8 right-8 drop-shadow hover:bg-gray-700 transition-all text-white bg-primary w-16 h-16 rounded-full flex items-center justify-center'
    >
      <WhatsApp />
    </a>
  )
}

export default WaComponent
