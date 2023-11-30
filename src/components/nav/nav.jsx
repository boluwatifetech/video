import React,{useState} from 'react'
import {FaBell,FaSearch,FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './nav.css'
export default function Nav() {
const [search,setSearch]=useState('')
  return (
    <div className='coverall-nav'>
        <div className='form'>
            <form className='input-class'>
                <input  type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
              
                <FaSearch className='fa-search'/>
              
               
            </form>
    
        </div>
   
   <div className='info-nav'>
    <FaBell className='fa-nav'/>
    <span>lil</span>
    <FaUser className='fa-nav'/>
   </div>
    </div>
  )
}
