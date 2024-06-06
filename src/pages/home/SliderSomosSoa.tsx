import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import HTML from '../../hooks/useHTML'

interface Props {
  data: {
    id: number
    title: string
    text: string
  }[]
}

const Slider = ({ data }: Props) => {
  const sliderProperties = {
    autoplay: true,
    transitionDuration: 500,
    duration: 3000,
    indicators: false,
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
          <h2 className='text-2xl lg:text-4xl font-extrabold'>{item.title}</h2>
          <hr />
          <div className='lg:text-xl text-balance'>
            <HTML text={item.text} />
          </div>
        </article>
      ))}
    </Fade>
  )
}

export default Slider
