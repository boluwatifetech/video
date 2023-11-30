import { request } from "../../api"
import {Channel_Video_Request,Channel_Video_Success,Channel_Video_Fail,} from '../actiontype'

export const ChannelDetailsVid=(id)=>async dispatch=>{
    try {
        dispatch({
            type:Channel_Video_Request,
    
        })
      const {data}=await  request('/channels',{
            params:{
                part:'snippet,statistics,contentDetails',
                id
            }
        })
    
        dispatch({
            type:Channel_Video_Success,
            payload:data.items[0]
        })
    } catch (error) {
        dispatch({
            type:Channel_Video_Fail,
            payload:error.response.data
        })
     
    
    }
    }