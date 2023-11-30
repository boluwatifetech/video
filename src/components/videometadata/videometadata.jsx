import React,{useEffect,useState} from 'react'
import numeral from 'numeral'
import moment from 'moment'
import { FaThumbsDown,FaThumbsUp } from 'react-icons/fa'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'
import {ChannelDetailsVid} from '../../redux/actions/channelarena'

import './videometadata.css'
export default function Videometadata({video}) {

   const [btn,setBtn]=useState(false)






return (
    <div className='cover-metadata'>

<div className='lil-adjust'>
        <div>
        <p className='video-title'>{video?.snippet?.title}</p>
        <span>
           <p> {numeral(video?.snippet?.viewCount).format('0.a')} views</p>
       <p>{moment(video?.snippet?.publishedAt).fromNow()}</p>
        </span>
   <div className='like-section'>
    <span><FaThumbsDown  size={26}/> {numeral(video?.snippet?.dislikeCount).format('0.a')}</span>
    <span style={{color:'green'}}><FaThumbsUp size={26}/> {numeral(video?.snippet?.likeCount).format('0.a')}</span>
   </div>
   </div>

  <div>
<div className='subcribers'>

   <p>{numeral('1000').format('0.a')} subscribers</p>
   </div>

   <div className='channel-metadata'>
   <p>{video?.snippet?.channelTitle}</p>
<button>subscribe</button>
   </div>
   </div>
</div>

   <div className='channel-des'>
     {btn?video?.snippet?.description:video?.snippet?.description.slice(0,200)}
     <button onClick={()=>setBtn(!btn)}>{btn?'show less':'show more'}</button>
   </div>
    </div>
  )
}
