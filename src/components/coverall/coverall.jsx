import React,{useEffect} from 'react'
import Nav from '../nav/nav'
import Body from '../body/body'
import Bottom from '../boderbottom/bottom'
import Login from '../login/login'
import Search from '../search/search'
import './coverall.css'
import {useNavigate} from 'react-router-dom'
import Watchmovie from '../watchmovie/watchmovie'
import { Routes,Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Coverall() {
  const navigate=useNavigate()

  const {accessToken,loading}
  =useSelector(state=>state.auth)


  useEffect(()=>{
    if(!loading&&!accessToken){
navigate('/')
    }
  },[accessToken,loading,navigate]
  
  )
  

  

  return !accessToken?<Login/>: (
    <div>
    


      <Nav/>
<Routes>

<Route path='/' exact element={<Body/>}/>


<Route path='/search/:searchTerm' element={<Search/>}/>

<Route path='/watch/:id' element={<Watchmovie/>}/>

</Routes>
<Bottom className="bottom-coverall"/>
  



      
      
       
     
 
     
    </div>
  )
}
