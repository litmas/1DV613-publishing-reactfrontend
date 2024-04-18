import { useEffect } from 'react'
import authStore from '../stores/authStore'

export default function LogoutPage() {
    
    const store = authStore()

    useEffect(() => {
        store.logout()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <h1>You are now logged out</h1>
    )
}