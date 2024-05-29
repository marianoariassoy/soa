import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

interface Props {
  data: {
    id: number
    title: string
    description: string
  }[]
}

const Slider = ({ data }: Props) => {
  const sliderProperties = {
    autoplay: true,
    transitionDuration: 500,
    duration: 3000,
    indicators: true,
    arrows: false,
    infinite: true,
    pauseOnHover: false
  }

  return (
    <Fade {...sliderProperties}>
      {data.map(item => (
        <article
          className='flex flex-col gap-y-6'
          key={item.id}
        >
          <h2 className='text-4xl font-extrabold'>{item.title}</h2>
          <hr />
          <p className='lg:text-xl text-balance'>{item.description}</p>
        </article>
      ))}
    </Fade>
  )
}

export default Slider
