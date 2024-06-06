import Image from '../../components/Image'
import { Link } from 'wouter'

interface Props {
  data: {
    id: number
    title: string
    image: string
    shortext: string
  }
}
const NovedadesItem = ({ data }: Props) => {
  return (
    <article className='border border-white min-h-80 aspect-square overflow-hidden lg:aspect-[7/5] relative cursor-pointer'>
      <Link to={`/novedades/${data.id}`}>
        <div className='absolute top-0 left-0 w-full h-full bg-black/20 hover:bg-black/80 transition-all flex flex-col justify-between p-6 a-main'>
          <div>
            <span className='text-xl font-extrabold'>+</span>
          </div>
          <div>
            <h3 className='uppercase text-xl lg:text-2xl font-extrabold'>{data.title}</h3>
            <p className='text-sm'>{data.shortext}</p>
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

export default NovedadesItem
