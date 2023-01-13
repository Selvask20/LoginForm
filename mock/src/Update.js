import {useNavigate} from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'


function Update() {
    
    const[id,setId]=useState(0)
    const[name,setName]=useState('')
    const[age,setAge]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navi=useNavigate()

    useEffect(()=>{
        setId(localStorage.getItem('_id'))
        setName(localStorage.getItem('name'))
        setAge(localStorage.getItem('age'))

        setEmail(localStorage.getItem('email'))
        setPassword(localStorage.getItem('password'))
    },[])

    function click(e){
        e.preventDefault();
        axios.put(`http://localhost:8000/${id}`,{
           name:name,age:age, email:email,password:password
        })
        .then(()=>navi('/table'))
    }

  return (
    <div>
       <form onSubmit={click}>
       Email:<input type='name' onChange={(e)=>setName(e.target.value)} value={name} ></input><br/><br/>
       Email:<input type='number' onChange={(e)=>setAge(e.target.value)} value={age} ></input><br/><br/>
        Email:<input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} ></input><br/><br/>
        Password:<input type='text'  onChange={(e)=>setPassword(e.target.value)} value={password} ></input><br/><br/>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Update;
