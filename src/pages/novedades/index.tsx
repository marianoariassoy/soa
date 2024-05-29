import Layout from '../../layout/Layout'
import Image from '../../components/Image'
import { useEffect } from 'react'
import { Lines3 } from '../../components/icons'

const Index = () => {
  useEffect(() => {
    const body = document.querySelector('body')!
    const header = document.querySelector('header')!
    body.classList.add('bg-white')
    header.classList.remove('bg-black/40')
    header.classList.add('text-black')
  })
  return (
    <Layout>
      <section className='text-black pt-32 animate-fade'>
        <div className='h-20 w-44 mb-6'>
          <Lines3 />
        </div>
        <div className='px-6 lg:px-12 pb-12 flex flex-col gap-y-6 max-w-7xl'>
          <h1 className='text-4xl lg:text-6xl font-extrabold break-words'>NUEVOS MÉTODOS DE PIPING</h1>
          <div className='flex justify-between items-center'>
            <hr />
            <span className='lg:text-xl font-semibold'>07-05-2024</span>
          </div>
          <p className='lg:text-xl font-semibold'>
            Nuestros clientes son nuestra mejor carta de presentación. Hemos tenido el privilegio de colaborar con
            empresas líderes en la industria minera y energética, entregando soluciones innovadoras y de alta calidad
            que han impulsado su éxito. Explore nuestra galería de proyectos para conocer más sobre nuestro trabajo y el
            impacto que hemos tenido en la región.
          </p>
        </div>

        <Image
          src='https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=2400'
          alt=''
        ></Image>

        <div className='p-6 lg:px-12 lg:py-20 max-w-7xl lg:text-xl'>
          <p>
            Nuestros clientes son nuestra mejor carta de presentación. Hemos tenido el privilegio de colaborar con
            empresas líderes en la industria minera y energética, entregando soluciones innovadoras y de alta calidad
            que han impulsado su éxito. Explore nuestra galería de proyectos para conocer más sobre nuestro trabajo y el
            impacto que hemos tenido en la región. Nuestros clientes son nuestra mejor carta de presentación. Hemos
            tenido el privilegio de colaborar con empresas líderes en la industria minera y energética, entregando
            soluciones innovadoras y de alta calidad que han impulsado su éxito. Explore nuestra galería de proyectos
            para conocer más sobre nuestro trabajo y el impacto que hemos tenido en la región. Nuestros clientes son
            nuestra mejor carta de presentación. Hemos tenido el privilegio de colaborar con empresas líderes en la
            industria minera y energética, entregando soluciones innovadoras y de alta calidad que han impulsado su
            éxito. Explore nuestra galería de proyectos para conocer más sobre nuestro trabajo y el impacto que hemos
            tenido en la región.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Index
