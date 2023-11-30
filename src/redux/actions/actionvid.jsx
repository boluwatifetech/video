import {  Selected_Video_Fail, Selected_Video_Request, Selected_Video_Success, 
    Videos_Fails, Videos_Request, Videos_Success } from "../actiontype"
import { request } from "../../api"

export const getPopularVids=()=>async dispatch=>{

    try {
        
dispatch({
    type:Videos_Request
})
const {data}=await request('/videos',{

  
params:{
    part:'snippet,contentDetails,statistics',
    chart:'mostPopular',
    regionCode:'IN',
    maxResults:100,
    pageToken:'',
},
})

dispatch({
    type:Videos_Success,
    payload:{
        videos:data.items,
        nextPageToken:data.nextPageToken,
        category:'All'
    }

})


    } catch (error) {
        console.log(error)
        dispatch({
            type:Videos_Fails,
            payload:error,
        })
    }
}


export const getVideoCategory=(keyword)=>async (dispatch,getState)=>{

    try {
        
dispatch({
    type:Videos_Request
})
const {data}=await request('/search',{

  
params:{
    part:'snippet',
   
    maxResults:100,
    pageToken:getState().home_video.nextPageToken,
    q:keyword,
    type:'video',
},
})

dispatch({
    type:Videos_Success,
    payload:{
        videos:data.items,
        nextPageToken:data.nextPageToken,
        category:keyword
    }

})


    } catch (error) {
        console.log(error)
        dispatch({
            type:Videos_Fails,
            payload:error,
        })
    }
}

export const getVideoId=(id)=>async dispatch=>{
try {
    dispatch({
        type:Selected_Video_Request,

    })
  const {data}=await  request('/videos',{
        params:{
            part:'snippet,statistics',
            id:id
        }
    })

    dispatch({
        type:Selected_Video_Success,
        payload:data.items[0]
    })
} catch (error) {
    dispatch({
        type:Selected_Video_Fail,
        payload:error.message
    })
 

}
}