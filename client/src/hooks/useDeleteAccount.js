import { useSetLogout, useToken, useUser } from "../services/store"

const useDeleteAccount = () => {
    const userID = useUser()
    const token = useToken()
    const logout = useSetLogout()
    return async() => {
        const res = await fetch(`http://localhost:3001/users/${userID}`, {
            method:"DELETE",
            headers:{Authorization:token}
        })

        const data = await res.json()
        if(data) {
            logout()
        }
    }
}

export default useDeleteAccount