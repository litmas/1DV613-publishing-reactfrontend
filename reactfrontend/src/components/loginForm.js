import authStore from "../stores/authStore"

export default function loginForm() {

    const store = authStore()

    return (
        <form onSubmit={store.login}>
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