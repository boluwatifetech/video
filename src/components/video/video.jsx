import React,{useEffect,useState} from 'react'
import moment from 'moment'
import numeral from 'numeral'
import { request } from '../../api'
import './video.css'
import { useNavigate } from 'react-router-dom'
export default function Video({video}) {
    const {id,snippet:{channelId,channelTitle,title,publishedAt,thumbnails:{medium},},}=video

    const [duration,setDuration]=useState(null)
    const [views,setViews]=useState(null)
const [icon,setIcon]=useState(null)


  const seconds=  moment.duration(duration).asSeconds()
const _duration=moment.utc(seconds*1000).format('mm:ss')

const _videoId=id?.videoId||id


const navigate=useNavigate()

useEffect(()=>{
    const getVideoDetails=async()=>{
        const {data:{items}}= await request('/videos',{
            params:{
                part:'contentDetails,statistics',
                id:_videoId,
            }
        })
      
        setDuration(items[0].contentDetails.duration)

        setViews(items[0].statistics.viewCount)

    }
    getVideoDetails()
},[_videoId])


useEffect(()=>{
    const getVideoIcon=async()=>{
        const {data:{items}}= await request('/channels',{
            params:{
                part:'snippet',
                id:channelId,
            }
        })
      
setIcon(items[0].snippet.thumbnails.default)
    }
    getVideoIcon()
},[channelId])

const handleVideoClick=()=>{
navigate(`/watch/${_videoId}`)
}

  return (
    <div className='coverall-video' style={{cursor:'pointer'}} onClick={handleVideoClick}>
<div className='images'>
<img src={medium.url}/>
<span>{_duration}</span>
    </div>
    <div className='cover-content'>
        <p>{title.slice(0,30)}</p>
        <p>{numeral(views).format('0')} views</p>
        <p>{moment(publishedAt).fromNow()}</p>
        <div className='icon'>
           
        <img src={icon?.url}/>
        <p>{channelTitle}</p>
        </div>
        
    </div>
    </div>
  )
}
