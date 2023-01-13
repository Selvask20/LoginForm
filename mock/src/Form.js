import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Form.css'

function Form() {
    const navi=useNavigate()
    const[name,setname]=useState('')
    const[age,setage]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const username=(e)=>{
        setname(e.target.value)
    }
    const userage=(e)=>{
        setage(e.target.value)
    }
    const useremail=(e)=>{
        setEmail(e.target.value) 
    }
    const userpassword=(e)=>{
        setPassword(e.target.value)
    }
    const click=(e)=>{
        e.preventDefault();
        

        axios.post('http://localhost:8000/',{

            name:name,age:age,email:email,password:password})

            .then(()=>{
                navi('/table')
            })
           setname('') 
           setage('')
           setEmail('')
           setPassword('')
    }


  return (
    <div className='form'>
        <div id='form'>
        <form onSubmit={click}>
        Name:<input type='text' value={name} onChange={username}></input><br/><br/>
        Age:<input type='number' value={age} onChange={userage}></input><br/><br/>
        Email:<input type='email'value={email} onChange={useremail}></input><br/><br/>
        Password:<input type='password' value={password} onChange={userpassword}></input><br/><br/>
        <button type='submit'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Form
