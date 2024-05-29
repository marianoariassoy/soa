import Slider from './SliderSomosSoa'
import { useInView } from 'react-intersection-observer'

const SomosSoa = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  const data = [
    {
      id: 1,
      title: 'Misión',
      description:
        'Acompañar a nuestros clientes durante el desarrollo de sus proyectos de manera segura, eficiente y responsable hacia el medio ambiente, optimizando la producción y reduciendo sus costos operativos.'
    },
    {
      id: 2,
      title: 'Visión',
      description:
        'Ser una empresa líder en el sector energético, entregando soluciones innovadoras, sostenibles. y de alta calidad.'
    },
    {
      id: 3,
      title: 'Valores',
      description: 'Seguridad, integridad, trabajo en equipo, excelencia, innovación y respeto por las personas.'
    }
  ]

  return (
    <section id='quienes-somos'>
      <div className='m-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-24 lg:pt-48 items-center mb-12'>
        <div
          className={`${inView ? 'animate-fade-right' : 'opacity-0'}`}
          ref={ref}
        >
          <div className='flex flex-col text-5xl lg:text-6xl font-extrabold'>
            <span>SOMOS</span>
            <span>NOA</span>
          </div>
        </div>
        <div className={`${inView ? 'animate-fade-left' : 'opacity-0'}`}>
          <Slider data={data} />
        </div>
      </div>
      <div className='w-20 h-52 bg-lines'></div>
    </section>
  )
}

export default SomosSoa
