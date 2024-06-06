import { LogoBlack } from '../components/icons'
import { menu, social } from '../components/data'

const Footer = () => {
  return (
    <footer className='bg-primary py-12 flex justify-between items-center gap-x-3 px-6 lg:px-12'>
      <div className='flex flex-col gap-y-6'>
        <nav className='flex flex-col gap-y-2 text-sm font-medium uppercase'>
          {menu.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className='hover:text-white/50 transition-all scroll'
            >
              {item.title}
            </a>
          ))}
        </nav>
        <nav className='flex gap-x-3 text-xl'>
          {social.map((item, index) => (
            <a
              key={index}
              href={item.url}
            >
              {item.icon}
            </a>
          ))}
        </nav>
      </div>
      <div>
        <LogoBlack />
      </div>
    </footer>
  )
}

export default Footer
