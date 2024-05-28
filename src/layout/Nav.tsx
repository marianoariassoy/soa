import { menu } from '../components/data'

const Nav = () => {
  return (
    <nav
      className='hidden lg:block'
      id='nav'
    >
      <ul className='flex flex-wrap gap-y-1 gap-x-3 lg:gap-x-6 xl:gap-x-12 items-center uppercase font-medium text-sm'>
        {menu.map((item, index) => (
          <li key={index}>
            <a
              href={item.path}
              className='hover:text-white/50 scroll'
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
