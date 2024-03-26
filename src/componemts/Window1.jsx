import React from 'react'
import Sidebar from './Sidebar'
import Welcome from './Welcome'
import style from './style.module.css'


const Window1 = () => {
  return (
    <div id={style.body}>
       <Sidebar/> 
       <Welcome/>

       
      
    </div>
  )
}

export default Window1

