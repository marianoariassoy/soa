const SomosSoa = () => {
  return (
    <section id='quienes-somos'>
      <div className='m-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 pt-24 lg:pt-48 items-center mb-12'>
        <div>
          <div className='flex flex-col text-5xl lg:text-6xl font-extrabold'>
            <span>SOMOS</span>
            <span>NOA</span>
          </div>
        </div>
        <div className='flex flex-col gap-y-6'>
          <h2 className='text-4xl font-extrabold'>Misión</h2>
          <hr />
          <p className='lg:text-xl text-balance'>
            Acompañar a nuestros clientes durante el desarrollo de sus proyectos de manera segura, eficiente y
            responsable hacia el medio ambiente, optimizando la producción y reduciendo sus costos operativos.
          </p>
        </div>
      </div>
      <div className='w-20 h-52 bg-lines'></div>
    </section>
  )
}

export default SomosSoa
