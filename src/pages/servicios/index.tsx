import Layout from '../../layout/Layout'
import Image from '../../components/Image'
import { useEffect } from 'react'

const Index = () => {
  useEffect(() => {
    const header = document.getElementById('header')!
    header.classList.add('bg-black/40')
  })
  return (
    <Layout>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-y-12'>
        <div className='lg:pr-28 aspect-[4/5]'>
          <Image
            src='https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1200'
            alt=''
          ></Image>
        </div>
        <div className='animate-fade lg:pt-64 flex flex-col gap-y-6 px-6 pb-20'>
          <hr />
          <h1 className='text-4xl lg:text-5xl font-extrabold break-words'>INGENIERIA DE PROCESOS</h1>
          <p className='text-balance max-w-4xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed praesentium dicta veritatis quo
            ipsam nostrum, quod deleniti id eveniet totam voluptatum cumque, vero doloremque nisi maiores. Quisquam,
            fugit possimus.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Index
