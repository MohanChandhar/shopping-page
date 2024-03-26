import React from 'react'
import Sidebar from './Sidebar'
import style from './style.module.css'
import Searchbar from './Searchbar'
const Final = () => {
  return (
    <div id={style.final}>
        <Sidebar/>
        <div id={style.center}>
            <h3>Men Checkered Round Neck Cotton <br /> Blend Black T-Shirt</h3>
              <div id={style.sideimg}>
                <div id={style.imga} >
                    <img src="/images/image2.png" alt="" height='100px'/>
                    <img src="/images/backview-img2.png" alt="" height='100px' />
                    <img src="/images/sideview-img2.png" alt="" height='100px' />
                </div>   
                <div id={style.imga1}>
                    <img src="/images/image2.png" alt="" />
                </div>
                
              </div>
              <div id={style.searchbars}>     
                 <Searchbar/>
              </div>
              
          </div>
          <div id={style.lcontent}>
                 <img src="/images/icon 1.png" alt="" />
                 <h4>House of Models</h4>
                 <div id={style.osr} >
                   <button>Overview <p>|</p></button> 
                   <button>Specifications <p>|</p></button>
                   <button>Reviews</button>
                 </div>
                 <div id={style.cont3}>
                  <h3>Product Description</h3>
                  <p>Tees Collection specialize in making men's clothes with characteristics of fashionable,comfortable and elegant. To show a kind of fashionable and special dressing style, appear the person's vigorous and vitality personality, and express his active and optimistic attitude of life. Wear our professional design high quality men's shirts, you will become more elegant and fascinating. Our designers are attention to every detail of the design and pursue exquisite sewing process.</p>
                 </div>
                <button id={style.button1}>Buy Now</button>
              </div>
          
      </div>
  )
}

export default Final
