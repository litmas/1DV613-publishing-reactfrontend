// carsStore.js

import { create } from 'zustand'
import axios from 'axios'


// Define your store
const authStore = create((set) => ({

    loggedIn: null,

    signUpForm: {
        email: '',    
        password: ''
    },

    loginForm: {
        email: '',    
        password: ''
    },

    updateSignUpForm: (e) => {
        const {name, value} = e.target

    set(state => {
        return {
            signUpForm: { 
                ...state.signUpForm,
                [name]: value
        }}
    })
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

    signUp: async () => {
        const { signUpForm } = authStore.getState() 

        const res = await axios.post('/signup', signUpForm)

        set({
            signUpForm: {
            email: '',
            password: ''
        }
        })

        console.log(res)
    },

    login: async () => {

        const {loginForm} = authStore.getState() 

        const res = await axios.post('/login', loginForm)
        
        set({loggedIn: true, 
            loginForm:{ 
            email: '',
            password: ''}
        })

        console.log(res)
    },

    checkAuth: async () => {
        try {
        await axios.get('check-auth')
        set({loggedIn: true})
    } catch(error) {
        set({loggedIn: false})
    }
},

logout: async () => {
    await axios.get('/logout')

    set({loggedIn: false})
}

}))


export default authStore;
