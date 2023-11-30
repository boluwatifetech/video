import React,{useEffect} from 'react'

import Videometadata from '../videometadata/videometadata'
import './watchmovie.css'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getVideoId } from '../../redux/actions/actionvid'
import { useSelector } from 'react-redux'

export default function Watchmovie() {

const {id}=useParams()

const dispatch=useDispatch()

useEffect(()=>{
  dispatch(getVideoId(id))
  },[dispatch,id])

const {video}=useSelector(state=>state.selected_video)
console.log(video)




  return (
    <div className='coverall-videowatch'>

<div>
        <div className='watch-movie'>
<iframe frameBorder='0'
src={`https://www.youtube.com/embed/${id}`}
title={video?.snippet?.title}
allowFullScreen
width="100%"
height='100%'>
    </iframe>
        </div>
        <Videometadata video={video} videoId={id}/>
      
        
        </div>
       

    </div>
  )
}
