import {Channel_Video_Request,Channel_Video_Fail,Channel_Video_Success} from '../actiontype'

export const ChannelVideo=(
    state={
       
        channel:{},
    },
    action
)=>{
        const {payload,type}=action
        switch (type) {
           
            
                case Channel_Video_Request:
                    return{
                        ...state,
                  
                       
                    }

                    case Channel_Video_Success:
                        return{
                            ...state,
                            channel:payload,
                           
                         
                        }

                        case Channel_Video_Fail :
                            return{
            ...state,
        channel:null,
        error:payload,
                            }
        
            default:
                return state;
        }
    }
