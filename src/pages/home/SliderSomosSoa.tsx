import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import HTML from '../../hooks/useHTML'
import { Back, Forward } from '../../components/icons'

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
    arrows: true,
    infinite: true,
    pauseOnHover: false,
    initialSlide: 0,
    prevArrow: (
      <div className='hover:text-white text-primary transition-all text-2xl -ml-20 hidden lg:block'>
        <Back />
      </div>
    ),
    nextArrow: (
      <div className='hover:text-white text-primary transition-all text-2xl absolute -mr-20 hidden lg:block'>
        <Forward />
      </div>
    )
  }

  return (
    <Fade {...sliderProperties}>
      {data.map(item => (
        <article
          className='flex flex-col gap-y-6'
          key={item.id}
        >
          <h2 className='text-2xl lg:text-4xl font-extrabold'>{item.title.replace(/on/g, 'ón')}</h2>
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
