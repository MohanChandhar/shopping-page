import React from 'react'
import Sidebar from './Sidebar'
import style from './style.module.css'
import {Link} from 'react-router-dom'
import Searchbar from './Searchbar'

const Searchresult = () => {
  return (
    <div id={style.shop}>
        <Sidebar/>
        <div id={style.rshop}>
          <h3>List of Black T-shirt</h3>
            <div id={style.content1} >
                <p>Recommended</p>
                <p>Lowest Price</p>
                <p>Top Rated</p>
            </div>
            <div id={style.content2}>
                <div id={style.box}>
                   <Link to='/searchresult'> <img className={style.pic1} src="/images/image1.png" alt="" /></Link>
                    <div id={style.layer}>
                        <img className={style.pic2} src="/images/flipcart.png" alt=""  />
                        <div id={style.box1}>
                           <img src="/images/rating.png" alt="" />
                            <p>Jump Cuts </p>
                            <h4>Men Printed Polo Neck Polyester Black T-Shirt</h4>
                            <div id={style.rupee}>
                                <p>₹349</p>
                                <button>Shop now</button>
                            </div>
                        </div>
                    </div>
                </div>
          <div id={style.box}>
               <Link to='/searchresult'> <img className={style.pic1} src="/images/image2.png" alt="" /></Link>
              <div id={style.layer}>
                  <img className={style.pic2} src="/images/amazon.png" alt=""  />
                    <div id={style.box1}>  
                      <img src="/images/rating.png" alt="" />
                        <p>AVEJO </p>
                         <h4>Men Checkered Round Neck Cotton Blend Black T-Shirt</h4>
                            <div id={style.rupee}>
                             <p>₹419</p>
                              <button>Shop now</button>
                            </div>
                     </div>
              </div>
           
           </div>
        <div id={style.box}>
                <Link to='/searchresult'><img className={style.pic1} src="/images/image3.png" alt="" /></Link>
               <div id={style.layer}>
                  <img className={style.pic3} src="/images/myntra.png" alt=""  />
                  <div id={style.box1}>
                        <img src="/images/rating.png" alt="" />
                       <p>EyeBogler </p>
                        <h4>Men Solid Round Neck Polyester Black T-Shirt</h4>
                        <div id={style.rupee}>
                          <p>₹254</p>
                          <button>Shop now</button>
                        </div>
                     </div>
                </div>
            </div>
            </div> 
            <button id={style.btn}> <img src="/images/Frame1.png" alt="" height='20px' /><p>shop more</p></button>
           <div id={style.input}>
            <Searchbar/>
           </div>
        </div>  
        
    </div>
 
  )
}

export default Searchresult
