import React,{useEffect} from 'react'
import Topbar  from '../topbar/topbar'
import { useDispatch,useSelector } from 'react-redux'
import { getPopularVids } from '../../redux/actions/actionvid'
import Video from '../video/video'
import './body.css'
export default function Body() {

  const dispatch=useDispatch()

 

  useEffect(()=>{
    dispatch(getPopularVids())
  },[dispatch])

 const {videos}=useSelector(state=>state.home_video)

  return (
    <div className='container-body'>
      <Topbar/>
      <div className='body-video'>

      {
  videos.map((video)=>{
    return <Video key={video.id} video={video}/>
  })
}
      </div>

      </div>
  )
}
