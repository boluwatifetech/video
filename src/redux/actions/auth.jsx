import { auth,provider } from '../../components/firebase/firebase'
import { signOut } from 'firebase/auth'
import { signInWithPopup } from 'firebase/auth'
import { LOGIN_FAIL, LOGIN_REQUEST,
     LOGIN_SUCCESS,LOAD_PROFILE, LOG_OUT } from '../actiontype'

export const login=()=>async dispatch=>{
    
    

    

           try{
           
           dispatch({
        type:LOGIN_REQUEST,
    })

            provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
       const res= await signInWithPopup(auth,provider)
       console.log(res)
       const accessToken=res.user.accessToken

      

    const profile={
        name:res.user.auth.displayName,
   photoURL:res.user.metadata.photoURL,
    }

    sessionStorage.setItem('ytc-access-token',accessToken)
    sessionStorage.setItem('ytc-user',JSON.stringify(profile))

    dispatch({
        type:LOGIN_SUCCESS,
        payload:accessToken
    })

    dispatch({
        type:LOAD_PROFILE,
        payload:profile,
    })

      
        }
    
           catch(err){
            console.log(err)
dispatch({
    type:LOGIN_FAIL,
    payload:err
})
           }
    
    

   
           }


           export const logout=()=> async dispatch=>{

            await signOut(auth)

            dispatch({
                type:LOG_OUT
            })

            sessionStorage.removeItem('ytc-access-token')
            sessionStorage.removeItem('ytc-user')
           }