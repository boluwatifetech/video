import React from 'react'
import moment from 'moment'

export default function Comments({comment}) {

  const {authorDisplayName,authorProfileImageUrl,publishedAt,textDisplay}=comment
  return (
    <div>
        <div className='each-commentimg'>
        <img src={authorProfileImageUrl}/>
        </div>
       <div className='content-comments'>
        <p>{authorDisplayName} * {moment(publishedAt).fromNow()}</p>
       <p>{textDisplay}</p>
       </div>
    </div>
  )
}
