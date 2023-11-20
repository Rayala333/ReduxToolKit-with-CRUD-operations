import React, { useEffect, useState } from 'react'
import '../css/nav.css'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchUser } from '../redux/userDetailSlice'


const Nav = () => {

  const [search,setSearch] = useState('')

  const dispatch = useDispatch()

  const changeSearch = (e)=>{
    // const data = e.target.value
    // console.log(data)
    setSearch(e.target.value)
    // dispatch(searchingData(search))

  }
  useEffect(()=>{
      dispatch(searchUser(search))
  },[search])

  console.log(search)

  return (
    <div className='nav'>
        <ul>
        <Link to='/'> <li>Home</li> </Link>
        <Link to='/form'> <li>AddList</li></Link>
        <Link to='/table'> <li>Table</li></Link>
        </ul>
        <input type="search" id="gsearch" value={search} name='search' onChange={changeSearch} placeholder='search'/>
    </div>
  )
}

export default Nav