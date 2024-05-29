import Image from '../../components/Image'
// import { useEffect, useState } from 'react'
import { Link } from 'wouter'

interface Props {
  data: {
    id: number
    title: string
    image: string
  }
}

const ServiciosItem = ({ data }: Props) => {
  // const [number, setNumber] = useState(0)

  // useEffect(() => {
  //   const number = Math.floor(Math.random() * 3001)
  //   setNumber(number)
  // }, [])

  return (
    <article
      className={`opacity-0 aspect-[5/4] lg:aspect-[4/5] border border-white border-t-0 relative cursor-pointer animate-fade`}
    >
      <Link to={`/servicios/${data.id}`}>
        <div className='absolute top-0 left-0 w-full h-full bg-black/30 hover:bg-black/80 transition-all flex flex-col justify-between hover:pb-3 hover:backdrop-blur'>
          <div className='flex justify-end'>
            <div className='h-20 w-20 bg-lines-2'> </div>
          </div>
          <div className='p-6 lg:p-12 text-xl lg:text-3xl transition-all'>
            <span className='font-extrabold'>+</span>
            <h3 className='uppercase font-extrabold max-w-64'>{data.title}</h3>
          </div>
        </div>
      </Link>
      <div className='h-full w-full'>
        <Image
          src={data.image}
          alt={data.title}
        />
      </div>
    </article>
  )
}

export default ServiciosItem
