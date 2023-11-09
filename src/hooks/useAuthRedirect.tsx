import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../hooks'
import { toast } from 'react-toastify'

const useAuthRedirect = () => {
  const navigate = useNavigate()

  const { errors, loading, isAuthenticated } = useAppSelector(
    (state) => state.security
  )

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
    if (errors) {
      errors.forEach((error) => toast.error(error))
    }
  }, [isAuthenticated, errors])

  return { loading }
}

export default useAuthRedirect
