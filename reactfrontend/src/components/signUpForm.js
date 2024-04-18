import authStore from "../stores/authStore"
import { useNavigate } from 'react-router-dom'
export default function signUpForm() {

    const store = authStore()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate()

    const handleSignUp = async (e) => {
        e.preventDefault()
        await store.signUp()
        navigate('/login')
    }

    return (
        <form onSubmit={handleSignUp}>
        <input onChange={store.updateSignUpForm}
         value={store.signUpForm.email}
          type='email' name='email'/>
    
        <input onChange={store.updateSignUpForm}
         value={store.signUpForm.password}
          type='password' name='password'/>
        
        <button type='submit'>Sign up</button>
        </form>
    )
}