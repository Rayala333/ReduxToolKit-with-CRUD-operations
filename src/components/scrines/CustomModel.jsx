import React from 'react';
import '../css/CustomModel.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CustomModel = ({Id,setView}) => {
    console.log(Id)
    const {users,loading} = useSelector((state)=>state.app)
  return (
    <div className='modalBackgroung'>
        {
            users && users.map((e,i)=>(
              e.id===Id  && ( <div className='modelContainer' key={i}>
                                <h2>{e.username}</h2>
                                <div className='Vbutton'>
                                    <Link onClick={()=>setView(false)}>Close</Link>
                                </div>
                              </div>)
            ))
        }
        
    </div>
  )
}

export default CustomModel