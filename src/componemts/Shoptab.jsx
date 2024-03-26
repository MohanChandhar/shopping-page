import React from 'react'
import Sidebar from './Sidebar'
import style from './style.module.css'
import Searchbar from './Searchbar'
const Shoptab = () => {
  return (
    <div id={style.shoptab}>
      <Sidebar/>
      <div id={style.cont1}>
        <img src="/images/lensicon.png" alt="" height='20px' />
        <p>Shopping across web</p>  
        
        <div id={style.cont2}>
            <br /><p>flipkart.com</p>
            <p>meesho.com</p>
            <p>mensxp.com</p>
            <p>amazon.com</p>
            <p>ajio.com</p>
            <p>nike.ae</p>
        </div>
        <div id={style.bottom}>
        <Searchbar/>
        </div>
      </div>
    </div>
  )
}

export default Shoptab
