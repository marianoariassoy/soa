import Form from './Form'
import scroll from '../../utils/scroll'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Lines3 } from '../../components/icons'

const Contacto = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  useEffect(() => {
    scroll()
  }, [])

  return (
    <section id='contacto'>
      <div
        className={`m-auto max-w-6xl px-6 pt-12 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
        ref={ref}
      >
        <h1 className='text-5xl lg:text-6xl font-extrabold mb-3'>CONTACTO</h1>
      </div>
      <div className='flex justify-end'>
        <div className='h-20'>
          <Lines3 />
        </div>
      </div>
      <div
        className={`m-auto max-w-6xl px-6 pb-20 animate-delay-500 mt-6 ${inView2 ? 'animate-fade' : 'opacity-0'}`}
        ref={ref2}
      >
        <div className='max-w-2xl'>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contacto
