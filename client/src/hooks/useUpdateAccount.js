import { useNavigate } from "react-router-dom";
import { useToken } from "../services/store";

const useUpdateAccount = (update, setUpdate, profileID) => {
    const token = useToken()
    const navigate = useNavigate()
    return async () => {
        const formData = new FormData();
        formData.append("username", update.username);
        formData.append("profile_image", update.picture);
        const res = await fetch(`http://localhost:3001/users/${profileID}`, {
            method:"PUT",
            headers:{"Authorization": token},
            body: formData
        })

        const updated = await res.json()
        if(updated){
            setUpdate({username:"",picture:""})
            navigate(0)
        }
    }
}

export default useUpdateAccount