import { menu } from '../components/data'
import { Link, useLocation } from 'wouter'

const Nav = () => {
  const [path] = useLocation()

  const closeMenu = () => {
    const menu = document.getElementById('menu-mobile')
    menu.classList.toggle('hidden')
  }

  return (
    <>
      <nav
        className='hidden lg:block'
        id='menu'
      >
        <ul className='flex flex-wrap gap-y-1 gap-x-3 lg:gap-x-6 xl:gap-x-12 items-center uppercase font-medium text-sm'>
          {menu.map((item, index) => (
            <li key={index}>
              {path === '/' ? (
                <a
                  href={item.path}
                  className='hover:opacity-60 scroll'
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  href='/'
                  className='hover:opacity-60'
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <nav
        className='hidden fade-in absolute -z-10 backdrop-blur left-0 top-0 h-screen w-screen bg-black/80'
        id='menu-mobile'
      >
        <div className='h-full w-full flex justify-center items-center'>
          <ul className='flex flex-col gap-y-3 justify-center items-center uppercase font-medium'>
            {menu.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className='hover:text-white/50 scroll'
                  onClick={closeMenu}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
