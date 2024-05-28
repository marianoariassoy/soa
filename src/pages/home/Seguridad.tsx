const Seguridad = () => {
  return (
    <section
      id='seguridad-y-medio-ambiente'
      className='h-screen bg-no-repeat bg-cover relative'
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/60575/smoke-smoking-chimney-fireplace-60575.jpeg?auto=compress&cs=tinysrgb&w=2400)'
      }}
    >
      <div className='absolute top-0 right-0 h-20 w-64 bg-lines-2 z-10 bg-no-repeat'></div>
      <div className='absolute top-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent'></div>
      <div className='absolute w-full h-full flex items-end justify-center z-20'>
        <div className='w-full max-w-6xl px-6 flex flex-col items-end gap-y-6 pb-32 text-right'>
          <div>
            <h2 className='text-2xl'>COMPROMISO CON LA</h2>
            <h1 className='text-5xl lg:text-6xl font-extrabold max-w-2xl'>SEGURIDAD Y MEDIO AMBIENTE</h1>
          </div>
          <p className='lg:text-xl text-balance max-w-2xl'>
            En Servicios Operacionales Andinos la seguridad de nuestro personal y la protección del medio ambiente son
            nuestras principales prioridades. Nos comprometemos a cumplir con los más altos estándares de seguridad en
            todos nuestros proyectos, al tiempo que implementamos prácticas sostenibles que minimizan nuestro impacto en
            el entorno natural.
          </p>
        </div>
      </div>
      <div className='absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black'></div>
    </section>
  )
}

export default Seguridad
