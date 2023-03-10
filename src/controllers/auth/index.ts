import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import type { RootState } from '../../redux/store'
import { toast } from 'react-toastify'
import { setLoading, setError, setUser } from '../../redux/features/auth/authSlice'
import { auth } from '../../firebase/firebase-config'
import {
  User,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

export function useAuthController() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state: RootState) => state.auth)
  const fetchUser = (user: User | null) => dispatch(setUser(user))
  const fetchLoading = (payload: boolean) => dispatch(setLoading(payload))
  async function signUp(email: string, password: string) {
    try {
      dispatch(setLoading(true))
      await createUserWithEmailAndPassword(auth, email, password)
      dispatch(setLoading(false))
    } catch (err) {
      dispatch(setError('Error Register'))
    }
  }

  function signIn(email: string, password: string) {
    try {
      dispatch(setLoading(true))
      signInWithEmailAndPassword(auth, email, password)
        .then((_) => toast.success('Login success!'))
        .catch((_) => toast.error('Email/password you entered is incorrect!'))
        .finally(() => dispatch(setLoading(false)))
    } catch (err) {
      dispatch(setError('Error Login'))
    }
  }

  async function logOut() {
    try {
      dispatch(setLoading(true))
      await signOut(auth)
      dispatch(setLoading(false))
    } catch (err) {
      dispatch(setError('Error Logout'))
    }
  }

  return {
    state,
    signUp,
    signIn,
    logOut,
    fetchUser,
    fetchLoading,
  }
}
