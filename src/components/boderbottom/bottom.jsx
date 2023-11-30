import React from 'react'
import './bottom.css'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {FaHome,FaThumbsUp,FaBuilding,FaSadCry,FaArrowAltCircleLeft} from 'react-icons/fa'
import { logout } from '../../redux/actions/auth'
export default function Bottom() {

    const dispatch=useDispatch()

    const HandleLogout=()=>{
dispatch(logout())
    }

  return (
    <div>
        <div  className="bottom-coverall">
<div className='coverall-bottom'>

<Link to='/'>
<div className='each-bottom'>
<small><FaHome className='fa-bottom'/>
</small>
            <p>home</p>
        </div>
</Link>
           

           

           

            


            

            <div className='each-bottom'
            onClick={HandleLogout}>
                <small><FaArrowAltCircleLeft className='fa-bottom'/></small>
                <p>logout</p>
            </div>
            </div>
        </div>
      
    </div>
  )
}
