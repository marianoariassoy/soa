import { social } from '../components/data'

const Social = () => {
  return (
    <div className='flex h-full'>
      {social.slice(0, 2).map((item, index) => (
        <a
          key={index}
          href={item.url}
          target='_blank'
          className='bg-primary text-white h-full w-10 lg:w-16 flex items-center justify-center text-xl transition-all hover:bg-gray-700'
        >
          {item.icon}
        </a>
      ))}
      <button className='hover:bg-primary text-white h-full px-3 lg:w-16 flex items-center justify-center text-sm  bg-gray-700 lg:hidden'>
        MENU
      </button>
    </div>
  )
}

export default Social
