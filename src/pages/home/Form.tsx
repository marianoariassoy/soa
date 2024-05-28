import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import BeatLoader from 'react-spinners/BeatLoader'
import { dataContact } from '../../components/data'

const Form = () => {
  type Inputs = {
    name: string
    city: string
    email: string
    location: string
    phone: string
    country: string
    message: string
  }

  const lan = 'es'
  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: Inputs) => {
    setSending(true)

    axios.post(' ', { ...data }).then(data => {
      if (data.data === 'success') {
        setSended(true)
        setSending(false)
      } else {
        setError(true)
        setSending(false)
      }
    })
  }

  const Error = () => {
    return <div className='text-sm font-medium mt-1 text-primary'>{dataContact[lan].required}</div>
  }

  return (
    <>
      {error ? (
        <span className='text-2xl font-bold'>{dataContact[lan].error}</span>
      ) : sended ? (
        <span className='text-3xl font-bold'>{dataContact[lan].thanks}</span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col lg:flex-row items-end'>
            <div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <input
                    className='w-full border border-white h-11 px-4 bg-transparent text-sm'
                    placeholder={dataContact[lan].name}
                    {...register('name', { required: true })}
                  />
                  {errors.name && <Error />}
                </div>
                <div>
                  <input
                    className='w-full border border-white h-11 px-4 bg-transparent text-sm'
                    placeholder={dataContact[lan].city}
                    {...register('city')}
                  />
                </div>
                <div>
                  <input
                    className='w-full border border-white h-11 px-4 bg-transparent text-sm'
                    placeholder={dataContact[lan].email}
                    {...register('email', { required: true })}
                  />
                  {errors.email && <Error />}
                </div>
                <div>
                  <input
                    className='w-full border border-white h-11 px-4 bg-transparent text-sm'
                    placeholder={dataContact[lan].location}
                    {...register('location')}
                  />
                </div>
                <div>
                  <input
                    className='w-full border border-white h-11 px-4 bg-transparent text-sm'
                    placeholder={dataContact[lan].phone}
                    {...register('phone', { required: true })}
                  />
                  {errors.phone && <Error />}
                </div>
                <div>
                  <input
                    className='w-full border border-white h-11 px-4 bg-transparent text-sm'
                    placeholder={dataContact[lan].country}
                    {...register('country')}
                  />
                </div>
              </div>
              <textarea
                className='w-full border border-white px-4 bg-transparent h-44 p-4 mt-4 text-sm'
                placeholder={dataContact[lan].message}
                {...register('message')}
              />
            </div>
            <div>
              {sending ? (
                <BeatLoader />
              ) : (
                <button
                  type='submit'
                  className='font-extrabold bg-primary text-white h-14 px-8 hover:bg-gray-700 transition-all'
                >
                  {dataContact[lan].send}
                </button>
              )}
            </div>
          </div>
        </form>
      )}
    </>
  )
}

export default Form
