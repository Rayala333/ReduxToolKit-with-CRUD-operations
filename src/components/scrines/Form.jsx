import React, { useEffect, useState } from 'react';
import '../css/Form.css'

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/userDetailSlice';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [user,setUser] = useState({
        username:"",
        email:"",
        phonenumber:""
    })
    // const [data,setData] = useState([])
    const dispatch = useDispatch()

    const navigate= useNavigate()
    const changeHandler = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(user)
        dispatch(createUser(user))
        navigate('/table')
    }
    // const submitHandler = async (e)=>{
    //     e.preventDefault()
    //     try{
    //         if(!user.username || !user.email || !user.phonenumber){
    //             alert("All fields are required")
    //         }else if(user.email){
    //                 data.map((e,i)=>(
    //                     user.email === e.email ? alert(`${e.email}  is already registered`):null
    //                 ))
    //         }
    //         else{
    //             const response = await axios.post('http://localhost:3005/users',user)
    //             if(response){
    //                 setData([...data,user])
    //             }
    //         }
            
    //     }catch(err){
    //         alert(err.message)
    //     }
    // }
    // useEffect(()=>{
    //     const getData = async()=>{
    //             const res = await axios.get('http://localhost:3005/users') || []
    //             const newdata = res.data
    //             // console.log(newdata,"newdata")
    //             if(data.length!==newdata.length){
    //                 setData(newdata)
    //             }
    //     }
    //     getData()
    // },[data])
    // console.log(data,"Data")
  return (
    <div className='container'>
        <form onSubmit={submitHandler}>
            <div className='fields'>
                <label className='label'>Name</label>
                <input type='text' name='username' value={user.username} onChange={changeHandler}/>
            </div>
            <div className='fields'>
                <label>Email</label>
                <input type='email' name='email' value={user.email} onChange={changeHandler}/>
            </div>
            <div className='fields'>
                <label>Phonenumber</label>
                <input type='text' name='phonenumber' value={user.phonenumber} onChange={changeHandler} />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>

  )
}

export default Form