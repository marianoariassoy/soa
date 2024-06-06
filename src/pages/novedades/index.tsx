import { useParams } from 'wouter'
import Layout from '../../layout/Layout'
import Image from '../../components/Image'
import { useEffect, useState } from 'react'
import { Lines3 } from '../../components/icons'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import HTML from '../../hooks/useHTML'

const Index = () => {
  const { data, loading } = useFetch(`/novedades`)
  const { id } = useParams() as { id: string }
  const [dataFiltered, setDataFiltered] = useState(null)

  useEffect(() => {
    const body = document.querySelector('body')!
    const header = document.querySelector('header')!
    body.classList.add('bg-white')
    header.classList.remove('bg-black/40')
    header.classList.add('text-black')
    window.scrollTo(0, 0)
    return () => {
      body.classList.remove('bg-white')
      header.classList.remove('text-black')
      header.classList.add('bg-black/40')
    }
  }, [])

  useEffect(() => {
    if (!loading) {
      const newData = data.filter(item => item.id == id)
      setDataFiltered(newData)
      document.title = `SOA - ${newData[0].title}`
    }
  }, [data, id, loading])

  return (
    <Layout>
      {!dataFiltered ? (
        <div className='h-screen w-screen'>
          <Loader />
        </div>
      ) : (
        <section className='text-black pt-32 animate-fade'>
          <div className='h-20 w-44 mb-6'>
            <Lines3 />
          </div>
          <div className='px-6 lg:px-12 pb-12 flex flex-col gap-y-6 max-w-7xl'>
            <h1 className='text-4xl lg:text-6xl font-extrabold break-words'>{dataFiltered[0].title}</h1>
            <div className='flex justify-between items-center'>
              <hr />
              <span className='lg:text-xl font-semibold'>{dataFiltered[0].date}</span>
            </div>
            <p className='lg:text-xl font-semibold'>{dataFiltered[0].shortext}</p>
          </div>
          {dataFiltered[0].image && (
            <Image
              src={dataFiltered[0].image}
              alt=''
            ></Image>
          )}
          <div className='p-6 lg:px-12 lg:py-20 max-w-7xl'>
            <HTML text={dataFiltered[0].text} />
          </div>
        </section>
      )}
    </Layout>
  )
}

export default Index
