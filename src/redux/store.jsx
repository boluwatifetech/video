import {createStore,applyMiddleware,combineReducers} from 'redux'
import { authReducer } from './reducer/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { videoReducer } from './reducer/vidreducer'
import {selectedVideo} from './reducer/vidreducer'
import {ChannelVideo} from './reducer/channelreducer'
import {commentReducer} from './reducer/commentreducer'
const rootReducer=combineReducers({
    auth:authReducer,
    home_video:videoReducer,
    selected_video:selectedVideo,
    channel_details:ChannelVideo,
comment_reducer:commentReducer
})


export const store=createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

