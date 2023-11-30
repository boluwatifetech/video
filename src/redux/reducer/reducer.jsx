
import { LOGIN_REQUEST,LOAD_PROFILE,
    LOGIN_SUCCESS,LOGIN_FAIL,LOG_OUT } from "../actiontype"

const initialState={
accessToken:sessionStorage.getItem('ytc-access-token')?sessionStorage.getItem('ytc-access-token'):null,
user:sessionStorage.getItem('ytc-user')?JSON.parse(sessionStorage.getItem('ytc-user')):null,
loading:false,
}

export const authReducer=(prevState=initialState,action)=>{
const {type,payload}=action

switch(type){
    case LOGIN_REQUEST:
        return{
            ...prevState,
            loading:true,
        }
        case LOGIN_SUCCESS:
            return{
                ...prevState,
                accessToken:payload,
                loading:false,
            }
            case LOGIN_FAIL:
                return{
                    ...prevState,
                    accessToken:null,
                    error:payload,
                    loading:false,
                }

                case LOAD_PROFILE:
                    return{
                        ...prevState,
                     user:payload,
                    }
                
                    case LOG_OUT:
                        return{
                            ...prevState,
accessToken:null,
user:null,
                        }

        default:
            return prevState
}
}