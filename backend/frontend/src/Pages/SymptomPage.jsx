import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom';

export default function SymptomPage() {

    let navigate=useNavigate()

    const [symptom,setSymptom]=useState(null)

    const {symptomId}=useParams();
    // console.log(symptomId)
    useEffect(()=>{
        getSymptom();
    },[symptomId]);

    let getSymptom= async ()=>{
        if (symptomId==='create') return;
        let response= await fetch(`http://127.0.0.1:8000/api/symptoms/${symptomId}/`);
        let data = await response.json();
        setSymptom(data)
    }

    let updateSymptom = async ()=>{
        fetch(`http://127.0.0.1:8000/api/symptoms/${symptomId}/update/`,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(symptom),
        })
    }

    let createSymptom = async ()=>{
        fetch(`http://127.0.0.1:8000/api/symptoms/create/`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(symptom)
        })
        console.log(symptom)
    }

    let deleteSymptom = async()=>{
        fetch(`http://127.0.0.1:8000/api/symptoms/${symptomId}/delete/`,{
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            },
        })
        navigate('/symptoms')
    }

    let handleOnClick=()=>{
        if (symptomId!=='create')
            updateSymptom()
        else if(symptomId==='create' && symptom!= null)
            createSymptom()
        navigate('/symptoms')
    }

    return (
        <div>
            <h1>single symptom</h1>
            <textarea onChange={(e)=>{setSymptom({...symptom,'symptom':e.target.value})}} defaultValue={symptom?.symptom}></textarea>
            <button onClick={handleOnClick}>submit</button>
            <button onClick={deleteSymptom}>Delete</button>
        </div>
    )
}
