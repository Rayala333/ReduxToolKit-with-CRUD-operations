import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { updateUser } from '../redux/userDetailSlice'

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch()

  const { users, loading } = useSelector((state) => state.app);

  const [update, setUpdate] = useState({
    username: '',
    email: '', // Add the missing properties
    phonenumber: '', // Add the missing properties
  });

  const changeHandler = (e)=>{
        setUpdate({...update,[e.target.name]:e.target.value})
  }

  useEffect(() => {
    const editDate = users.filter((e) => e.id == id);
    setUpdate(editDate[0] || {});
  }, [id, users]);

 const navigate =  useNavigate()


  const submitHandler = (e) => {
        e.preventDefault();
        console.log(update)
        dispatch(updateUser(update))
        navigate('/')

  };

  return (
    <div className='container'>
      {!id ? (
        <h1>loading..</h1>
      ) : (
        <form onSubmit={submitHandler}>
          <div className='fields'>
            <label className='label'>Name</label>
            <input type='text' name='username' value={update.username || ''} onChange={changeHandler} />
          </div>
          <div className='fields'>
            <label>Email</label>
            <input type='email' name='email' value={update.email || ''} onChange={changeHandler} />
          </div>
          <div className='fields'>
            <label>Phonenumber</label>
            <input type='text' name='phonenumber' value={update.phonenumber || ''} onChange={changeHandler} />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Update;
