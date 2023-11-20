import React,{useEffect, useState} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { showUser,deleteUser } from '../redux/userDetailSlice'
import '../css/Home.css'
import { Link } from 'react-router-dom';
import CustomModel from './CustomModel';

import axios from 'axios';

const Home = () => {
  
  const {users,loading,searchData} = useSelector((state)=>state.app)

  console.log(users,"Home")

  const dispatch = useDispatch()

  const [view,setView]=useState(false)
  const [Id,setId]=useState(null)

  useEffect(()=>{
      dispatch(showUser())
  },[])

  

  const clickView = (id)=>{
      setId(id)
      setView(true)
  }

  const deleteHandler = async(id)=>{
    // console.log(id,"ID")
      dispatch(deleteUser(id))
      // const response = await axios.delete(`http://localhost:3005/users/${id}`);
      // const result = await response.data
      // console.log(result.data,"HomeResult")
    // const newdata =  users.filter((e,i)=>{
    //     console.log(e.id!==id)
    //     return e.id!==id
    //   })

    //   console.log(newdata)
  }

 const newusers =  users.filter((ele, i) => {
    if (searchData.length === 0) {
      return ele; // Include all elements when searchData is empty
    } else {
      // Check if any property of the object includes searchData
      // return Object.values(ele).some((value) =>
      //   typeof value === "string" ? value.toLowerCase().includes(searchData.toLowerCase()) : false
      // );
      return ele.username.toLowerCase().includes(searchData.toLowerCase())
    }
  });

  return (
    <>
    {view && <CustomModel Id={Id} setView={setView}/>}
    {
      loading ? <h1 style={{textAlign:"center"}}>loading..</h1> :
      <div className='Homecantainer'>
        {
          users && newusers.map((e,i)=>(
            <div className="cart" key={e.id}>
              <h4>{e.username}</h4>
              <p>{e.email}</p>
              <div className='action'>
                  <Link onClick={()=>clickView(e.id)}>View</Link>
                  <Link to={`/update/${e.id}`}>Edit</Link>
                  <Link onClick={()=>deleteHandler(e.id)}>Delete</Link>
              </div>
              
            </div>
          ))
        }
      </div>
    }
      
      
    </>
  )
}

export default Home