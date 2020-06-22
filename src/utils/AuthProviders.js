import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export const AuthProviders = [
  {
    label: 'Facebook',
    provider: new firebase.auth.FacebookAuthProvider(),
    color: '#4267B2',
    variant: 'primary'
  },
  {
    label: 'Google',
    provider: new firebase.auth.GoogleAuthProvider(),
    color: '#DB4437',
    variant: 'danger'
  }
]

export default AuthProviders
