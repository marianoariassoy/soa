import ServiciosItem from './ServiciosItem'
import { useInView } from 'react-intersection-observer'

const Servicios = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  const data = [
    {
      id: 1,
      title: 'INGENIERIA DE PROCESOS',
      image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=2400'
    },
    {
      id: 2,
      title: 'Ingenieria Mecanica',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=2400'
    },
    {
      id: 3,
      title: 'INGENIERIA eléctrica',
      image:
        'https://images.pexels.com/photos/60575/smoke-smoking-chimney-fireplace-60575.jpeg?auto=compress&cs=tinysrgb&w=2400'
    },
    {
      id: 4,
      title: 'Obras de geo sintéticos',
      image: 'https://images.pexels.com/photos/264512/pexels-photo-264512.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 5,
      title: 'INGENIERIA DE PROCESOS',
      image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=2400'
    },
    {
      id: 6,
      title: 'Ingenieria Mecanica',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=2400'
    },
    {
      id: 7,
      title: 'INGENIERIA eléctrica',
      image:
        'https://images.pexels.com/photos/60575/smoke-smoking-chimney-fireplace-60575.jpeg?auto=compress&cs=tinysrgb&w=2400'
    },
    {
      id: 8,
      title: 'Obras de geo sintéticos',
      image: 'https://images.pexels.com/photos/264512/pexels-photo-264512.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ]

  return (
    <section id='servicios'>
      <div
        className={`m-auto max-w-6xl px-6 pt-12 lg:pt-28 pb-20 flex flex-col gap-y-6 ${
          inView ? 'animate-fade-up' : 'opacity-0'
        }`}
        ref={ref}
      >
        <h1 className='text-5xl lg:text-6xl font-extrabold'>SERVICIOS</h1>
        <p className='lg:text-xl text-balance'>
          En Servicios Operacionales Andinos, ofrecemos una amplia gama de servicios especializados para empresas
          mineras y de diversos sectores en la región del NOA. Desde desarrollo de ingeniería conceptual hasta la
          ingeniería de detalle y obras que abarcan todas las disciplinas, nuestro equipo altamente calificado está
          preparado para abordar cualquier desafío y superar las expectativas de nuestros clientes.
        </p>
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
