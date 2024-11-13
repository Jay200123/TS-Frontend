import React, { useEffect} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthenticationStore } from '../../state'
import { toast } from 'react-toastify'

const ProtectedRoute: React.FC = () => {
  const { user } = useAuthenticationStore()

  useEffect(() => {
    if (!user) {
      toast.error('User Must login first')
    }
  }, [user])
  return user 
  ? <Outlet />
  : <Navigate to='/' replace />
}

export default ProtectedRoute
