import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showUser } from '../redux/userDetailSlice'
import '../css/Table.css'

const Table = () => {
 const dispatch = useDispatch()
 const {users,loading} = useSelector((state)=>state.app)
 

  useEffect(()=>{
    dispatch(showUser())
    // const getData = async()=>{
    //   const response = await axios.get('http://localhost:3005/users');
    //   console.log(response.data,"res")
    // }
    // getData()
  },[])
  if(loading){
    return <h1>Loading..</h1>
  }
  console.log(users,"Users")
  return (
    <div className='tablecontainer'>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users && users.map((e,i)=>(
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table