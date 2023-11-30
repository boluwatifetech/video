import React from 'react'
import Coverall from '../coverall/coverall'
import {store} from '../../redux/store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
export default function Containerapp() {
  return (
    <div>
      <Provider store={store}>
      <Router>
      <Coverall/>
      </Router>
        
        
   
      </Provider>
       
    </div>
  )
}
