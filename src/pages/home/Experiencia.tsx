import { useInView } from 'react-intersection-observer'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import HTML from '../../hooks/useHTML'

const Experiencia = () => {
  const { data, loading } = useFetch(`/textos`)

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  if (loading) return <Loader />

  return (
    <section
      id='experiencia'
      className='h-screen bg-no-repeat bg-cover relative'
      style={{
        backgroundImage: 'url(http://localhost/sites/soa-backend/images-static/experiencia.jpg)'
      }}
    >
      <div className='bg-primary w-20 h-20 absolute z-20'></div>
      <div className='absolute top-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent'></div>
      <div className='absolute w-full h-full flex items-end justify-center z-20'>
        <div
          className={`w-full max-w-6xl px-6 flex flex-col gap-y-6 pb-32 
          ${inView ? 'animate-fade-up' : 'opacity-0'}`}
          ref={ref}
        >
          <hr />
          <h1 className='text-5xl lg:text-6xl font-extrabold break-words'>EXPERIENCIA</h1>
          <div className='lg:text-xl text-balance max-w-4xl'>
            <HTML text={data[3].text} />
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black'></div>
    </section>
  )
}

export default Experiencia
