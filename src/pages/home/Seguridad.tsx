import { useInView } from 'react-intersection-observer'
import { Lines3 } from '../../components/icons'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import HTML from '../../hooks/useHTML'

const Seguridad = () => {
  const { data, loading } = useFetch(`/textos`)

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  if (loading) return <Loader />

  return (
    <section
      id='seguridad-y-medio-ambiente'
      className='h-screen bg-no-repeat bg-cover relative'
      style={{
        backgroundImage: 'url(https://soa.ar/backend/images-static/seguridad.jpg)'
      }}
    >
      <div className='absolute top-0 right-0 h-20 z-10'>
        <Lines3 />
      </div>
      <div className='absolute top-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent'></div>
      <div className='absolute w-full h-full flex items-end justify-center z-20'>
        <div
          className={`w-full max-w-6xl px-6 flex flex-col items-end gap-y-6 pb-32 text-right 
          ${inView ? 'animate-fade-left' : 'opacity-0'}`}
          ref={ref}
        >
          <div>
            <h2 className='text-2xl'>COMPROMISO CON LA</h2>
            <h1 className='text-5xl lg:text-6xl font-extrabold max-w-2xl'>SEGURIDAD Y MEDIO AMBIENTE</h1>
          </div>
          <div className='lg:text-xl text-balance max-w-2xl'>
            <HTML text={data[4].text} />
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black'></div>
    </section>
  )
}

export default Seguridad
