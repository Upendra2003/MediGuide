import React,{useState} from 'react'

export default function RegisterPage() {

    const [userDetails,setUserDetails] = useState({
        username:"",
        email:"",
        password:"",
        password2:"",
    })

    const registerUser= async (e)=>{
        e.preventDefault();
        let response = await fetch('http://127.0.0.1:8000/profile/register/',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userDetails)
        })
        if (response.status==200){
            console.log({"msg":"success"});
            console.log(response)
        }else{
            alert("Error Please try again !!")
        }
    }
    
    const handleChange=(e)=>{
        setUserDetails({
            ...userDetails,
            [e.target.name]:e.target.value
        })
        
    }

    return (
        <>
        <div>
            <form onSubmit={registerUser}>
                <input type="text" onChange={handleChange} placeholder='name' name='username' />
                <input type="email" onChange={handleChange} placeholder='email' name='email' />
                <input type="password" onChange={handleChange} placeholder='password' name='password' />
                <input type="password" onChange={handleChange} placeholder='conforim password' name='password2' />
                <input type="submit" onClick={registerUser} name="submit" value="Submit"/>
            </form>
        </div>
        </>
  )
}
