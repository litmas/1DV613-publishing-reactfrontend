// carsStore.js

import { create } from 'zustand'
import axios from 'axios'


// Define your store
const authStore = create((set) => ({

    loggedIn: null,

    loginForm: {
        email: '',    
        password: ''
    },

    updateLoginForm: (e) => {
        const {name, value} = e.target

    set(state => {
        return {
            loginForm: { 
                ...state.loginForm,
                [name]: value
        }}
    })
    },

    login: async (e) => {
        e.preventDefault()

        const {loginForm} = authStore.getState() 

        const res = await axios.post('/login', loginForm, {withCredentials: true})
        
        set({loggedIn: true})

        console.log(res)
    },

    checkAuth: async () => {
        try {
        await axios.get('check-auth')
        set({loggedIn: true})
    } catch(error) {
        set({loggedIn: false})
    }
}

}))


export default authStore;