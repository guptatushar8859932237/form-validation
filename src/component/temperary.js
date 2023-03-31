import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import swal from "sweetalert";
export default function Greet(){


    const [data,setdata]=useState(" ")
const [error,seterror]=useState({})
const navigate=useNavigate()



const handlechange=(e)=>{
        const{name,value}=e.target
        setdata({...data,[name]:value})
    }


    const handlevalidate=(value)=>{
    let error={};
if(value.email==='tusahrgupta8859@gmail.com' && value.password===123456){
alert('login')
navigate('/admin')}

    if(!value.email){
error.email='email required'
    }if(!value.password){
        error.password='password required'
    }else{console.log('error')
    seterror(error)
    }
    }
    



    const handleclick=()=>{
        handlevalidate(data)

    }



    return(<>

<form>

<input name="email" onChange={handlechange}></input>
<p>{error.email}</p>
<input type="password" name="password" onChange={handlechange}></input>
<p> {error.password}</p>

<button type="signin" varient='primary' onClick={handleclick}>submitt</button>
</form>


    </>)
}