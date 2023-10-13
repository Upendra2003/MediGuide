import { createContext,useState,useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import { useAsyncError, useNavigate } from "react-router-dom";

const AuthContext=createContext()

export default AuthContext;

export const AuthProvider=({children,loginDetails})=>{

    const navigate=useNavigate();
    const [authToken,setAuthToken]=useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const [user,setUser]=useState(()=>localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    const [loading,setLoading]=useState(true)

    let loginUser = async (e)=>{
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/profile/login/',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({"username":e.target.username.value,"password":e.target.password.value})
        });
        let data = await response.json()
        if(response.status==200){
            setAuthToken(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens',JSON.stringify(data))
            navigate('/')
        }else{
            alert("Something wrong")
        }
    }

    let updateUser = async()=>{
        console.log("update called")
        let response = await fetch('http://127.0.0.1:8000/profile/user/token/refresh/',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({"refresh":authToken.refresh})
        });
        let data = await response.json()
        if(response.status === 200){
            setAuthToken(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens',JSON.stringify(data))
        }else{
            logoutUser()
        }
    }

    let logoutUser=()=>{
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }

    let contextData={
        user:user,
        loginUser:loginUser,
        logoutUser:logoutUser
    }

    useEffect(()=>{
        let interval=setInterval(() => {
            if(authToken){
                updateUser()
            }
        }, 1000*60*4);
        return ()=> clearInterval(interval)
    },[authToken,loading])

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}