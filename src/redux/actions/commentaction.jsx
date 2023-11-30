import { request } from "../../api"
import { Comment_video_Success,Comment_video_Request,Comment_video_Fail} from '../actiontype'

export const commentAction=(id)=>async dispatch=>{
    try {
        dispatch({
            type:Comment_video_Request,
    
        })
      const {data}=await  request('/commentThreads',{
            params:{
                part:'snippet',
                videoId:id
            }
        })
    
        dispatch({
            type:Comment_video_Success,
            payload:data.items[0]
        })
    } catch (error) {
        dispatch({
            type:Comment_video_Fail,
            payload:error.response.data
        })
     
    
    }
    }