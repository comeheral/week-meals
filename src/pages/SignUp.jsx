
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase'

const provider = new GoogleAuthProvider();

function SignUp(){
  const navigate = useNavigate();

  function googleAuth(){
    console.log('gogoe authentication')

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log('authentified user : ', user)
        navigate('/')
      }).catch((error) => {
        console.log('error')
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  }

  return (
    <>
      <h1 className="title">Inscription</h1>
      <button onClick={googleAuth}>Sign up with Google</button>
    </>
  )
}

export default SignUp;