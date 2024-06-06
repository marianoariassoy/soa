import { useParams } from 'wouter'
import Layout from '../../layout/Layout'
import Image from '../../components/Image'
import { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import HTML from '../../hooks/useHTML'

const Index = () => {
  const { data, loading } = useFetch(`/servicios`)
  const { id } = useParams() as { id: string }
  const [dataFiltered, setDataFiltered] = useState(null)

  useEffect(() => {
    const header = document.getElementById('header')!
    header.classList.add('bg-black/40')
    window.scrollTo(0, 0)

    return () => {
      header.classList.remove('bg-black/40')
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
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-y-12'>
          <div className='lg:pr-28 aspect-[4/5]'>
            {dataFiltered[0].image && (
              <Image
                src={dataFiltered[0].image}
                alt=''
              ></Image>
            )}
          </div>
          <div className='animate-fade lg:pt-64 flex flex-col gap-y-6 px-6 pb-20'>
            <hr />
            <h1 className='text-4xl lg:text-5xl font-extrabold break-words'>{dataFiltered[0].title}</h1>
            <div className='text-balance max-w-4xl'>
              <HTML text={dataFiltered[0].text} />
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}

export default Index
