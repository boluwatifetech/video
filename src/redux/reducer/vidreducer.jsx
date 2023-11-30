import { Selected_Video_Fail, Selected_Video_Request, Selected_Video_Success, Videos_Fails, Videos_Request, Videos_Success } from "../actiontype"

export const videoReducer=(
    state={
        videos:[],
        nextPageToken:null,
        loading:false,
        activeCat:'All',
    },
    action
    
)=>{

    const {type,payload}=action
switch(type){

    case Videos_Request:
        return{
            ...state,
        
            loading:true,
        }


    case Videos_Success:
        return{
            ...state,
            videos:payload.videos,
            loading:false,
            nextPageToken:payload.nextPageToken,
activeCat:payload.category,
        }
        

            case Videos_Fails:
        return{
            ...state,
         error:payload,
            loading:false
        }

       

        default:
            return state
       
}

}




export const selectedVideo=(
    state={
       
        video:null,
    },
    action
)=>{
        const {payload,type}=action
        switch (type) {
           
            case Selected_Video_Request :
                return{
...state,

                }
            
                case Selected_Video_Success:
                    return{
                        ...state,
                       video: payload,
                       
                    }

                    case Selected_Video_Fail:
                        return{
                            ...state,
                            video:null,
                           
                            error:payload,
                        }

                       
        
            default:
                return state;
        }
    }
