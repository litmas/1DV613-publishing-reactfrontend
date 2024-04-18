import { useEffect } from "react"
import { Navigate } from 'react-router-dom'
import authStore from "../stores/authStore"

export default function requireAuth(props) {

    const store = authStore()

     
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if(store.loggedIn === null) {
            store.checkAuth()
        }
        // same problem as in carsPage.js
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (store.loggedIn === null) {
        return <div> Loading </div>
    }

    if (store.loggedIn === false) {
        return <Navigate to='/login'/>
    }

    return (
        <div>
            {props.children} 
        </div>
    )
}

