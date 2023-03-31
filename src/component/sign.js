import React, { useState } from "react";
import './Signin.css'


export default function Siging(){

  const [data,setData]=useState(" ")
const [error,setError]=useState({})

  const handlechange=(e)=>{
      const {name,value}=e.target
      setData({...data,[name]:value})
  }


  const handlevalidate=(value)=>{
    let error={};
    if(!value.text){
error.text='name required'
    }
    if(!value.pass){
      error.pass='password required'
    }if(!value.email){
error.email='email required'
    }if(!value.pass2){
      error.pass2='password confirm'
    }else{console.log('hellow')

  }
  setError(error)
  }


  const tusharclick=()=>{
handlevalidate(data)
  }


  
  return(
    <>
          <div className='maincontainer'>    
          <div className="formcontainer">
          <h1 className='heading'> signup form</h1>
          <div className="formtus">
      <input type="text" name='text' id="disabledTextInput"  onChange={handlechange} class="form-control" placeholder="Username"></input><br></br>
    <p>{error.text}</p>
      <input type="password" name="pass" id="disabledTextInput" class="form-control" onChange={handlechange} placeholder="Password"></input><br></br>
      <p>{error.pass}</p>
    
      <input type="email" name="email" id="disabledTextInput" class="form-control" onChange={handlechange} placeholder="Email"></input><br></br>
      <p>{error.email}</p>
    
      <input type="password" name="pass2" id="disabledTextInput" class="form-control" onChange={handlechange} placeholder="confirnm password"></input><br></br>
      <p>{error.pass2}</p>
    
    <button type="submit" class="btn btn-primary" onClick={tusharclick}>Submit</button>
    <p>Login Page  <a href='login' >Home</a>    </p>

    </div>

</div>

          <div className='imgcontorol'></div>
          
          </div>


    </>
  )
}