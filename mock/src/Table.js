import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Table() {
    const navi=useNavigate()
    const[count,setCount]=useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000')
        .then((res)=>{
            setCount(res.data)
        })
    },[])
    const userdelete=(id)=>{
        axios.delete(`http://localhost:8000/${id}`)
        .then(()=>callgetapi())
    }
    const callgetapi=()=>{
        axios.get('http://localhost:8000/')
        .then((res)=>{
            setCount(res.data)
        })
    }

    function userupdate2(id,name,age,Email,Password){
        localStorage.setItem('_id',id)
        localStorage.setItem('name',name)
        localStorage.setItem('age',age)
        localStorage.setItem('email',Email)
        localStorage.setItem('password',Password)
       navi('/Update')

    } 

  return (
    <div>
        <table>
           <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
            <th>Email</th>
            <th>Password</th>
            <th>Delete</th>
            <th>Update</th>
            </tr>
           </thead>
           {count.length===0? (<h1>not found</h1>):
           (count.map((data,index)=>
           <tbody key={index}>
             <tr><td>{data.name}</td> 
             <td>{data.age}</td>
          <td>{data.email}</td>
            <td>{data.password}</td>
            <td><button onClick={()=>userdelete(data._id)}>Delete</button></td>
            <td><button onClick={()=>userupdate2(data._id,data.name,data.age,data.email,data.password)}>Update</button></td>

            </tr>
           </tbody>))}
        </table>

      
    </div>
  )
}

export default Table
  