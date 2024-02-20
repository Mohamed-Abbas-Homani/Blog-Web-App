import { useEffect } from "react"
import { useCurrentPost, useSetComments, useToken } from "../services/store"

const useGetComments = () => {
    const currentPost = useCurrentPost()
    const setComments = useSetComments();
    const token = useToken()
    useEffect(() => {
        (async() => {
            const res = await fetch(`http://localhost:3001/comments/${currentPost}`, {
                method:"GET",
                headers:{Authorization: token}
            })

            const data = await res.json()
            console.log(currentPost, data.comments);
            setComments(data.comments)
        })()
    }, [currentPost])
}
export default useGetComments