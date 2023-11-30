import axios from 'axios'

export const request=axios.create({
    baseURL:'https://youtube.googleapis.com/youtube/v3/',
    params:{
        key:'AIzaSyAlgydL6-2KSi9PBcaBARPik1zu7zqp3XY'
    }
})

 