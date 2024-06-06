import ServiciosItem from './ServiciosItem'
import { useInView } from 'react-intersection-observer'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import HTML from '../../hooks/useHTML'

const Servicios = () => {
  const { data: textos, loading: loadingTextos } = useFetch(`/textos`)
  const { data, loading } = useFetch(`/servicios`)

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  if (loading) return <Loader />

  return (
    <section id='servicios'>
      <div
        className={`m-auto max-w-6xl px-6 pt-12 lg:pt-28 pb-20 flex flex-col gap-y-6 ${
          inView ? 'animate-fade-up' : 'opacity-0'
        }`}
        ref={ref}
      >
        <h1 className='text-4xl lg:text-6xl font-extrabold'>SERVICIOS</h1>
        <div className='lg:text-xl text-balance'>{!loadingTextos && <HTML text={textos[5].text} />}</div>
        <hr />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 border-t border-white'>
        {data.map(data => (
          <ServiciosItem
            key={data.id}
            data={data}
          />
        ))}
      </div>
    </section>
  )
}

export default Servicios
