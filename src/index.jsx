import {initializeApp} from "firebase/app"
import {
  getAuth,
  createUserWithEmailAndPassword
} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyChojOdivA7KQjt2_HBz9btZqKiw32CM2I",
  authDomain: "fir-project-22946.firebaseapp.com",
  projectId: "fir-project-22946",
  storageBucket: "fir-project-22946.appspot.com",
  messagingSenderId: "1015704093556",
  appId: "1:1015704093556:web:035488ac8c3f828dfbe221"
};

initializeApp(firebaseConfig)

// init services 
 const auth = getAuth()

//signing up 
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = signupForm.email.value
  const password = signupForm.password.value

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        console.log('user created:',cred.user)
        signupForm.reset()
    })
    .catch((err) => {
      console.log(err.message)
    })
})
