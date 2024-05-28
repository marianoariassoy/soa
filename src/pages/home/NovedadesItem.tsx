import Image from '../../components/Image'

interface Props {
  data: {
    id: number
    title: string
    image: string
    description: string
  }
}
const NovedadesItem = ({ data }: Props) => {
  return (
    <article className='border border-white min-h-80 pb-20 lg:aspect-[7/5] relative cursor-pointer'>
      <div className='absolute top-0 left-0 w-full h-full bg-black/20 hover:bg-black/80 transition-all flex flex-col justify-between p-6 a-main'>
        <div>
          <span className='text-xl font-extrabold'>+</span>
        </div>
        <div>
          <h3 className='uppercase text-xl lg:text-2xl font-extrabold'>{data.title}</h3>
          <p className='text-sm'>{data.description}</p>
        </div>
      </div>
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
