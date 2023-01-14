import React, { useEffect } from 'react'
import { auth } from '../../firebase/firebase-config'
import { useAuthController } from '../../controllers/auth'
type AuthProvider = {
  children?: React.ReactNode
}

const AuthProvider = (props: AuthProvider): JSX.Element => {
  const { fetchUser, fetchLoading } = useAuthController()
  useEffect(() => {
    //function that firebase notifies you if a user is set
    const unsubsrcibe = auth.onAuthStateChanged((user) => {
      fetchUser(user)
      fetchLoading(false)
    })
    return unsubsrcibe
  }, [])
  return <>{props.children}</>
}

export default AuthProvider
