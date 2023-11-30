import React,{useEffect} from 'react'
import Comments from '../comments/comments'
import {commentAction} from '../../redux/actions/commentaction'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
export default function Comment({videoId}) {
const dispatch=useDispatch()


useEffect(()=>{
    dispatch(commentAction(videoId))
},[videoId,dispatch])

const comments=useSelector(state=>state.comment_reducer.comments)

const _comment=comments?.map(comment=>comment.snippet.topLevelComment.snippet)
console.log( _comment)


    const handleComment=()=>{


}

  return (
    <div>

        <div className='coverall-comment'>
            <form onSubmit={handleComment}>
                <input type='text'/>
                <button type='submit'>comment</button>
            </form>
            <div className='comment-session'>
            
               
            </div>
            </div>
    </div>
  )
}
