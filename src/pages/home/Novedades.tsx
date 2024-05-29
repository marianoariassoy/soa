import NovedadesItem from './NovedadesItem'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const Novedades = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })
  const [showItem, setShowItem] = useState(2)

  const data = [
    {
      id: 1,
      title: 'NUEVOS MÉTODOS DE PIPING',
      image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in'
    },
    {
      id: 2,
      title: 'LITIO EN SALTA',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in'
    },
    {
      id: 3,
      title: 'LITIO EN SALTA',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in'
    },
    {
      id: 4,
      title: 'LITIO EN SALTA',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in'
    },
    {
      id: 5,
      title: 'LITIO EN SALTA',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in'
    },
    {
      id: 6,
      title: 'LITIO EN SALTA',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in'
    },
    {
      id: 7,
      title: 'LITIO EN SALTA',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in'
    },
    {
      id: 8,
      title: 'LITIO EN SALTA',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in'
    }
  ]
  return (
    <section id='novedades'>
      <div className='m-auto max-w-6xl px-6 pt-10 pb-20 flex flex-col gap-y-6'>
        <div
          className={`${inView ? 'animate-fade-up' : 'opacity-0'}`}
          ref={ref}
        >
          <hr />
          <h1 className='text-5xl lg:text-6xl font-extrabold mt-20 break-words'>NOVEDADES</h1>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 animate-delay-500 gap-6 mt-12 ${
            inView2 ? 'animate-fade' : 'opacity-0'
          }`}
          ref={ref2}
        >
          {data.slice(0, showItem).map(item => (
            <NovedadesItem
              key={item.id}
              data={item}
            />
          ))}
        </div>
        <div className='flex justify-center mt-6'>
          {showItem < data.length && (
            <button
              className='text-2xl font-extrabold a-main'
              onClick={() => setShowItem(showItem + 2)}
            >
              VER MÁS
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Novedades
