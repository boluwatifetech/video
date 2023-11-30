import React,{useState} from 'react'
import {data} from './topdata'
import './topbar.css'
import { getVideoCategory } from '../../redux/actions/actionvid'
import { useDispatch } from 'react-redux'
export default function Topbar() {
    const [active,setActive]=useState('all')

    const dispatch=useDispatch()

    const  handleClick=(value)=>{
        setActive(value)
        dispatch(getVideoCategory(value))
    }


      return (
    <div className='coverall-topbar'>
        {
            data.map((value,i)=>{
return <span key={i} className={active===value?' black':'light'}
 onClick={()=>handleClick(value)}
 >{value}</span>
            })
        }
    </div>
  )
}
