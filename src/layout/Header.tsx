import Nav from './Nav'
import { Logo } from '../components/icons'
import Social from './Social'
import { useEffect } from 'react'
import { Link, useLocation } from 'wouter'

const Header = () => {
  const [path] = useLocation()

  useEffect(() => {
    const header = document.getElementById('header')!
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        header.classList.add('bg-black/40')
      } else {
        header.classList.remove('bg-black/40')
      }
    })
  }, [])

  return (
    <header
      className='fixed top-0 w-full z-50 h-24 lg:h-28 flex justify-between transition-all items-center gap-x-3 backdrop-blur'
      id='header'
    >
      <div className='px-6 lg:px-12'>
        {path === '/' ? (
          <a
            href='#hero'
            className='hover:text-gray-300 transition-all scroll'
          >
            <Logo />
          </a>
        ) : (
          <Link
            href='/'
            className='hover:text-gray-300 transition-all'
          >
            <Logo />
          </Link>
        )}
      </div>
      <div>
        <Nav />
      </div>
      <div className='h-full'>
        <Social />
      </div>
    </header>
  )
}

export default Header
