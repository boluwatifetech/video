import {Comment_video_Success , Comment_video_Request,
    Comment_video_Fail} from "../actiontype"

export const commentReducer=(
    state={

       comments:null
    },
    action
    
)=>{

    const {type,payload}=action
switch(type){

    case Comment_video_Request:
        return{
            ...state,
        
          
        }


    case Comment_video_Success:
        return{
            ...state,
            comments:payload,
           
        }
        

            case  Comment_video_Fail:
        return{
            ...state,
         error:payload,
          
        }

       

        default:
            return state
       
}

}