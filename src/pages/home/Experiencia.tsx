import { useInView } from 'react-intersection-observer'

const Experiencia = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  return (
    <section
      id='experiencia'
      className='h-screen bg-no-repeat bg-cover relative'
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=2400)'
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
          <p className='lg:text-xl text-balance max-w-4xl'>
            Nuestro equipo de profesionales cuenta con una vasta experiencia en la industria minera y energética, con un
            enfoque particular en el sector del litio. Con una combinación de conocimientos técnicos y prácticos, hemos
            liderado con éxito numerosos proyectos en la región, demostrando nuestro compromiso con la excelencia y la
            innovación en cada paso del camino.
          </p>
        </div>
      </div>
      <div className='absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black'></div>
    </section>
  )
}

export default Experiencia
