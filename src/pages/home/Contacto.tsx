import Form from './Form'
import scroll from '../../utils/scroll'
import { useEffect } from 'react'

const Contacto = () => {
  useEffect(() => {
    scroll()
  }, [])

  return (
    <section id='contacto'>
      <div className='m-auto max-w-6xl px-6 pt-12'>
        <h1 className='text-5xl lg:text-6xl font-extrabold mb-3'>CONTACTO</h1>
      </div>
      <div className='flex justify-end'>
        <div className='h-20 w-64 bg-lines-2 bg-no-repeat'></div>
      </div>
      <div className='m-auto max-w-6xl px-6 pb-20 mt-6'>
        <div className='max-w-2xl'>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contacto
