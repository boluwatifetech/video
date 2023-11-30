import React,{useEffect} from 'react'

import {useNavigate} from 'react-router-dom'
import { login } from '../../redux/actions/auth'
import { useDispatch,useSelector} from 'react-redux'
import './log.css'

export default function Login() {
  const dispatch=useDispatch()
   
    

const accessToken=useSelector(state=>state.auth.accessToken)

   const handleLogin=()=>{

    dispatch(login())
    
   }
 
  const  navigate=useNavigate()

 

 useEffect(()=>{
        if(accessToken){
            navigate('/')
               }
    },[accessToken,navigate])
   


  return (
    <div className='login-container'>
    
      <img src='images/images (4)_1.jpeg'/>
      <span className='views'>
      <h1>login to <span>Views</span></h1>

      <button onClick={handleLogin}>sign In With Google</button>
        </span>
        </div>
  )
}
