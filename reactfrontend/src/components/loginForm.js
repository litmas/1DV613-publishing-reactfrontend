import authStore from "../stores/authStore"
import { useNavigate } from 'react-router-dom'


export default function loginForm() {

    const store = authStore()

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const navigate = useNavigate()

        const handleLogin = async (e) => {
          e.preventDefault()
            await  store.login()
      //navigate
            navigate('/')
    }

    return (
        <form onSubmit={handleLogin}>
        <input onChange={store.updateLoginForm}
         value={store.loginForm.email}
          type='email' name='email'/>
    
        <input onChange={store.updateLoginForm}
         value={store.loginForm.password}
          type='password' name='password'/>
        
        <button type='submit'>login</button>
        </form>
    )

}