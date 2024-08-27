import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const chackLogin = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const cookies = new Cookies(null, { path: '/' })

    if (!cookies.get('token')) {
      navigate('/signin')
    }
  }, [])
}
