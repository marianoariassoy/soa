import Slider from './SliderSomosSoa'
import { useInView } from 'react-intersection-observer'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const SomosSoa = () => {
  const { data, loading } = useFetch(`/textos`)

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  if (loading) return <Loader />

  return (
    <section id='quienes-somos'>
      <div className='m-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-24 lg:pt-48 items-center mb-12'>
        <div
          className={`${inView ? 'animate-fade-right' : 'opacity-0'}`}
          ref={ref}
        >
          <div className='flex flex-col text-4xl lg:text-6xl font-extrabold'>
            <span>SOMOS</span>
            <span>SOA</span>
          </div>
        </div>
        <div className={`${inView ? 'animate-fade-left' : 'opacity-0'}`}>
          <Slider data={data.slice(0, 3)} />
        </div>
      </div>
      <div className='w-20 h-52 bg-lines'></div>
    </section>
  )
}

export default SomosSoa
