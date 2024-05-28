import Slider from './Slider'
import WhatsApp from './WhatsApp'

const Hero = () => {
  const data = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=2400'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=2400'
    }
  ]
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
