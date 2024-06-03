import Slider from './Slider'
import WhatsApp from './WhatsApp'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Hero = () => {
  const { data, loading } = useFetch(`/portada`)

  if (loading) return <Loader />

  return (
    <section
      className='h-screen w-screen bg-black/70'
      id='hero'
    >
      <Slider data={data} />
      <WhatsApp />
    </section>
  )
}

export default Hero
