import React, {useContext} from 'react'
import { AppContext } from '../App'
import { Navigate, useLocation } from 'react-router-dom'

export default  function RequireAuth({children})  {
    const user = useContext(AppContext).userLogin
   
    const location = useLocation()
    if (!user){
        return <Navigate to = '/login' state ={{ path : location.pathname }}/>
    }
    
  return children
}
