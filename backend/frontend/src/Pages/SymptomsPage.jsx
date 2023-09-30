import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';


export default function SymptomPage() { 

    const [symptom,setSymptom] = useState([])

    useEffect(()=>{
        getSymptoms();
    },[])

    let getSymptoms = async ()=>{
        let response = await fetch('http://127.0.0.1:8000/api/symptoms/');
        let data=await response.json();
        setSymptom(data);
    }


    return (
        <div>
        symptoms:
        {
            symptom.map((sym,index)=>(
                <Link to={`/symptoms/${sym.p_id}`} key={index}> {sym.symptom} </Link>
            ))
        }
        <Link to='/symptoms/create/'>Add</Link>
        </div>
    )
}
