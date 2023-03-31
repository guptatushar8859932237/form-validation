import React, { useState } from 'react';
import './HrManagement.css'
import { IoIosContact } from "react-icons/io";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


export default function Login() {


    const [data, setData] = useState(" ")
    const [error, setError] = useState({})


    const nevigate = useNavigate();
    
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    
    
    const handlevalidate = (value) => {
        let error = {};
        if(value.email==='tushargupta8859@gmail.com'  && value.password==='123456'){
            swal({
                title: "Login Successful",
                text: "",
                icon: "success",
              });
            nevigate('/admin')
        }
        if (!value.email) {
            error.email = 'email required'
        }
       
        if (!value.password) {
            error.password = 'password required  '
        } 
        setError(error)
    }

    const handleClick = () => {
        handlevalidate(data)
    }

    return (
        <>

            <div className="container">

                <div className="form">
                    <IoIosContact className='logo' />
                    <div className="formcont">
                        <div className="forminner">
                            <p className="heading">admin login</p>
                            <input className="input" name='email' type="email" placeholder=" username" onChange={handleChange} ></input><br></br>
                            <p className='valid'>{error.email}</p>

                            <input className="pass" name='password' onChange={handleChange} type='password' placeholder=" password"></input><br></br>
                            <p className='valid'>{error.password}</p>
                            <button className="butn" type="submit" onClick={handleClick}  >sign in</button>
                        </div>
             <p> create account :           <a href='/signup' className="link" >signup</a></p>
                    </div>
                </div>
                <div className="image">
                </div>
            </div>
        </>
    )
}