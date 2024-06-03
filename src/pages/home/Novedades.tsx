import NovedadesItem from './NovedadesItem'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Novedades = () => {
  const { data, loading } = useFetch(`/novedades`)

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })
  const [showItem, setShowItem] = useState(2)

  if (loading) return <Loader />

  return (
    <section id='novedades'>
      <div className='m-auto max-w-6xl px-6 pt-10 pb-20 flex flex-col gap-y-6'>
        <div
          className={`${inView ? 'animate-fade-up' : 'opacity-0'}`}
          ref={ref}
        >
          <hr />
          <h1 className='text-5xl lg:text-6xl font-extrabold mt-20 break-words'>NOVEDADES</h1>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 animate-delay-500 gap-6 mt-12 ${
            inView2 ? 'animate-fade' : 'opacity-0'
          }`}
          ref={ref2}
        >
          {data.slice(0, showItem).map(item => (
            <NovedadesItem
              key={item.id}
              data={item}
            />
          ))}
        </div>
        <div className='flex justify-center mt-6'>
          {showItem < data.length && (
            <button
              className='text-2xl font-extrabold a-main'
              onClick={() => setShowItem(showItem + 2)}
            >
              VER MÁS
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Novedades
