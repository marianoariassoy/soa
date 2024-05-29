import { social } from '../components/data'

const Social = () => {
  const handleMenu = () => {
    const menu = document.getElementById('menu-mobile')!
    const buttonMenu = document.getElementById('button-menu')!
    menu.classList.toggle('hidden')
    buttonMenu.classList.toggle('bg-gray-700')
    buttonMenu.classList.toggle('bg-primary')
  }
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
      <button
        className='hover:bg-primary text-white h-full px-3 lg:w-16 flex items-center justify-center text-sm bg-gray-700 lg:hidden font-medium'
        onClick={handleMenu}
        id='button-menu'
      >
        MENU
      </button>
    </div>
  )
}

export default Social
