import React from 'react'
import style from './style.module.css'
import {Link} from 'react-router-dom'
const Welcome = () => {
  return (
    <div id={style.welcome}>
      <h1>Hello,John</h1>
      <h3>How can I help you today?</h3>
      <div id={style.container}>
      <Link to='/shoptab'>
            <div>
                <p>Trending smart watches <br />2024</p>
                 <div id={style.img}>
                 <img src="/images/Frame1.png" alt="" />
            </div>
            </div>
            </Link>
            <div>
                <p>Portable vacuum <br /> cleaner</p>
                <div id={style.img}>
                <img src="/images/Frame2.png" alt="" />
                </div>
            </div>
            <div>
                <p>Kurti sets under <br /> 600</p>
                <div id={style.img}>
                  <img src="/images/Frame3.png" alt="" />
                </div>
            </div>
        </div>
        <div id={style.searchbar}>
       <div id={style.ltext}>
         <img src="/images/sicon1.png" alt="" />
         <input type="text" placeholder="Ask me anything..." required />
        </div>
        <div id={style.rtext}>
          <button id={style.inpbtn}>
        <img src="/images/sicon2.png" alt="" />
        <Link to='/shoptab'> <p>shop</p></Link></button>
          
        </div>
    </div>
    </div>
  )
}

export default Welcome
