import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

function Navbar () {
  const navigate = useNavigate()
  const handelLoguot = () => {
    const cookies = new Cookies()
    cookies.remove('token')
    cookies.remove('user')
    navigate('/signin')
  }
  return (
    <div className='w-full h-16 bg-green-500 flex items-center'>
      <div className='text-3xl font-bold text-white'>PosterBD</div>
      <div className='flex gap-1 ms-5'>
        <input
          className='input w-60 h-8 rounded-md'
          placeholder='Search'
          type='text'
        />
      </div>
      <div className='flex'>
        <button
          onClick={handelLoguot}
          className='btn btn-ghost text-white font-bold text-xl'
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
