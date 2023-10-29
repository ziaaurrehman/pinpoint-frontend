import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{alignItems:'center'}} className='d-flex w-[100%] justify-between md:px-11 pd_x '>
        <div>
        <img src='/images1/footer/Left footer image.svg' alt=''/>
        </div>
        <div>
        <div>
        <img src='/images1/footer/logo 2.svg' alt=''/>
        </div>
        <div className='d-flex justify-center'>
           <Link to="https://www.facebook.com"> <img src='/images1/footer/Group 1159.svg' alt=''/></Link>
           <Link to="https://www.instagram.com"> <img src='/images1/footer/Group 1160.svg' alt=''/></Link>
        </div>
      
        </div>
        <div className=''>
            <img src='/images1/footer/Right Footer Image.svg' alt=''/>
        </div>
    </div>
  )
}

export default Footer