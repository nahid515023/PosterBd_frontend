import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { api } from '../api/api'
import { ToastContainer, toast } from 'react-toastify'

function SignUpPage () {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cPassword: ''
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
      const { data } = await api.post('/auth/signup', formData)
      console.log(data.user)
      toast.success(data.message)
      navigate('/signin')
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message)
      } else {
        console.log('An unexpected error occurred.')
      }
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='card bg-base-100 w-96 shadow-xl p-2'>
        <div className='card-body'>
          <h2 className='card-title text-4xl mx-auto text-green-500'>Signup</h2>
          <form className='flex flex-col gap-4 mt-6' onSubmit={handleSubmit}>
            <label className='input input-bordered  input-success flex items-center gap-2'>
              <FontAwesomeIcon className='text-slate-500' icon={faUser} />
              <input
                type='text'
                className='grow'
                placeholder='Name'
                required
                value={formData.name}
                onChange={e => setData('name', e.target.value)}
              />
            </label>
            <label className='input input-bordered  input-success flex items-center gap-2'>
              <FontAwesomeIcon className='text-slate-500' icon={faEnvelope} />
              <input
                type='email'
                className='grow'
                required
                placeholder='Email'
                value={formData.email}
                onChange={e => setData('email', e.target.value)}
              />
            </label>

            <label className='input input-bordered  input-success flex items-center gap-2'>
              <FontAwesomeIcon className='text-slate-500' icon={faLock} />
              <input
                type='password'
                className='grow'
                required
                placeholder='Password'
                value={formData.password}
                onChange={e => setData('password', e.target.value)}
              />
            </label>
            <label className='input input-bordered  input-success flex items-center gap-2'>
              <FontAwesomeIcon className='text-slate-500' icon={faLock} />
              <input
                type='password'
                className='grow'
                required
                placeholder='Confirm Password'
                value={formData.cPasswordassword}
                onChange={e => setData('cPassword', e.target.value)}
              />
            </label>
            <button type='submit' className='btn btn-success text-white'>
              Sign Up
            </button>
            <ToastContainer />
            <p className='mx-3'>
              Already have an account?
              <Link className='link link-success ms-2' to={'/signin'}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
