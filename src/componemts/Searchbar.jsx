import React from 'react'
import style from './style.module.css'
import {Link} from 'react-router-dom'
const Searchbar = () => {
  return (
    <div id={style.searchbar}>
       <div id={style.ltext}>
         <img src="/images/sicon1.png" alt="" />
         <input type="text" placeholder="Black T shirt under 300" required />
        </div>
        <div id={style.rtext}>
          <button id={style.inpbtn}>
        <img src="/images/sicon2.png" alt="" />
        <Link to='/search'> <p>shop</p></Link></button>
          
        </div>
    </div>
  )
}

export default Searchbar
