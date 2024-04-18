import { useEffect } from "react"
import authStore from "../stores/authStore"

export default function requireAuth(props) {

    const store = authStore()

    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if(store.loggedIn === null) {
            store.authCheck()
        }
        // same problem as in carsPage.js
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!store.loggedIn) {
        return <div> Please login </div>
    }

    return (
        <div>
            {props.children} 
        </div>
    )
}

