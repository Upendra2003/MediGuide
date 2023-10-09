import { useContext, useEffect } from 'react';
import {Route, useNavigate} from 'react-router-dom'
import AuthContext from '../context/AuthContext';

const PrivateRoute = (props)=>{
    const {Component} = props;
    const navigate=useNavigate();
    let {user} = useContext(AuthContext)
    useEffect(()=>{
        let isAuthenticated;
        if(user)
            isAuthenticated=true;
        else
            isAuthenticated=false;
        if(!isAuthenticated){
            navigate('/login')
        }
    })
    return(
        <>
            <Component/>
        </>
    )
}

export default PrivateRoute