import Image from '../../components/Image'
import { useInView } from 'react-intersection-observer'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import HTML from '../../hooks/useHTML'

const Clientes = () => {
  const { data: textos, loading: loadingTextos } = useFetch(`/textos`)
  const { data, loading } = useFetch(`/clientes`)

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  if (loading) return <Loader />

  return (
    <section id='clientes-y-proyectos'>
      <div
        className={`m-auto max-w-6xl px-6 pt-28 mb-12 flex flex-col gap-y-6 ${
          inView ? 'animate-fade-up' : 'opacity-0'
        }`}
        ref={ref}
      >
        <h1 className='text-5xl lg:text-6xl font-extrabold'>CLIENTES</h1>
        <div className='lg:text-xl text-balance'>{!loadingTextos && <HTML text={textos[6].text} />}</div>
      </div>
      <div
        className={`m-auto max-w-6xl animate-delay-500 px-6 pb-20 grid grid-cols-2 lg:grid-cols-4 mt-6 gap-12 lg:gap-24 ${
          inView ? 'animate-fade' : 'opacity-0'
        }`}
      >
        {data.map(({ id, image }) => (
          <div
            key={id}
            className='aspect-square'
          >
            <Image
              src={image}
              alt='image'
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clientes
