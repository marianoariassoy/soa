import Image from '../../components/Image'
import { useInView } from 'react-intersection-observer'

const Clientes = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  const data = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ]
  return (
    <section id='clientes-y-proyectos'>
      <div
        className={`m-auto max-w-6xl px-6 pt-28 mb-12 flex flex-col gap-y-6 ${
          inView ? 'animate-fade-up' : 'opacity-0'
        }`}
        ref={ref}
      >
        <h1 className='text-5xl lg:text-6xl font-extrabold'>CLIENTES</h1>
        <p className='lg:text-xl text-balance'>
          Nuestros clientes son nuestra mejor carta de presentación. Hemos tenido el privilegio de colaborar con
          empresas líderes en la industria minera y energética, entregando soluciones innovadoras y de alta calidad que
          han impulsado su éxito. Explore nuestra galería de proyectos para conocer más sobre nuestro trabajo y el
          impacto que hemos tenido en la región.
        </p>
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
