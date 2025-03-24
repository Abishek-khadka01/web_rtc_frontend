import axios  from "axios";

const BACKEND_URL_USER = import.meta.env.VITE_BACKEND_URL_USER

 export const UserLoginApi  =async  (email : string , password : string)=>{

    return await axios.post(`${BACKEND_URL_USER}/login`, {
        email,
        password
    }, {
        withCredentials : true
    });


}


export const GetOnlineUsers = async ()=>{

    return axios.get(`${BACKEND_URL_USER}/online-users`, {
        withCredentials : true
    });


}

export const GetDetailsofUser = async (id : string) =>{

    return axios.get(`${BACKEND_URL_USER}/details/${id}`, {
        withCredentials : true
    });


}