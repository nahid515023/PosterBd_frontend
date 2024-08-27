import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../api/api'
import { ToastContainer, toast } from 'react-toastify'
import Cookies from 'universal-cookie'

function SignInPage () {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    checked: false
  })

  const setData = (name, value) => {
    setFormData(() => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await api.post('/auth/login', formData)
      console.log(data.user)

      const cookies = new Cookies()
      const userInfo = {
        name: data.user.name,
        email: data.user.email
      }
      cookies.set('user', userInfo, {
        httpOnly: false,
        maxAge: 24 * 3600 * 30
      })

      toast.success(data.message)
      navigate('/')
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message)
      } else {
        console.log('An unexpected error occurred.')
      }
    }
  }

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='card lg:card-side bg-base-100 shadow-xl'>
          <figure>
            <img
              src='https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp'
              alt='Album'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-4xl mx-auto text-green-500'>
              Login
            </h2>

            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <label className='input input-bordered flex items-center gap-2 mt-5 input-success'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='h-4 w-4 opacity-70'
                >
                  <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
                  <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
                </svg>
                <input
                  type='email'
                  className='grow'
                  placeholder='Email'
                  value={formData.email}
                  onChange={e => setData('email', e.target.value)}
                />
              </label>

              <label className='input input-bordered flex items-center gap-2 input-success'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='h-4 w-4 opacity-70'
                >
                  <path
                    fillRule='evenodd'
                    d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                    clipRule='evenodd'
                  />
                </svg>
                <input
                  type='password'
                  className='grow'
                  placeholder='Password'
                  value={formData.password}
                  onChange={e => setData('password', e.target.value)}
                />
              </label>
              <div className='flex justify-between'>
                <label className='label cursor-pointer'>
                  <p className='me-3'>Remember me</p>
                  <input
                    type='checkbox'
                    className='checkbox checkbox-success'
                    checked={formData.checked}
                    onChange={() => setData('checked', !formData.checked)}
                  />
                </label>
                <Link className='link link-success' to={'/'}>
                  Forgot Password
                </Link>
              </div>
              <button type='submit' className='btn btn-success text-white'>
                Sign in
              </button>
              <ToastContainer />
              <p className='mx-3'>
                Not registered yet?
                <Link className='link link-success ms-2' to={'/signup'}>
                  Create an account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignInPage
