import { useSetComments, useToken } from "../services/store"

const useDeleteComment = (commentID, postID) => {
    const token = useToken()
    const setComments = useSetComments()
    return async () => {
        const res = await fetch(`http://localhost:3001/comments/${postID}/${commentID}`, {
            method:"DELETE",
            headers:{Authorization: token}
        })

        const data = await res.json()
        if(data) {
            setComments(data.comments)
        }
    }
}

export default useDeleteComment