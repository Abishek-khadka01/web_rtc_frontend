import { useState } from "react"
import { UserLoginApi } from "../apis/users.apis"
import { useNavigate } from "react-router"
import useUserStore from "../contexts/zustand"
const UserLogin = ()=>{
    const [email, setEmail] = useState<string>("")
    const [password , setPassword] = useState<string>("")
    const navigate = useNavigate()
    const setData = useUserStore((state) => state.setData)
const HandleSubmit =async  ()=>{
    const response =  UserLoginApi(email,password as string )

    if((await response).status == 200) {
            const {id, username, email, profile_picture} = (await response).data.user
            setData( id , username , email , profile_picture )
    }       
    navigate("/dashboard")
    
    
}


return (
<>
<span>Email</span><br/>
    <input type="email" name="email" id="" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <span>Password</span><br/>
    <input type="password" name="password" id="" value={password} onChange={(e)=>
        setPassword(e.target.value)
    } />
        <button type="button" onClick={HandleSubmit}> Submit </button>

</>


)



}


export default UserLogin



