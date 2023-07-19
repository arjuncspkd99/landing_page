import React from 'react';
import './Footer.css'
import { Button } from 'antd';
import fb from '../../assets/images/fb.svg'
import playstore from '../../assets/images/playstore.svg'
import insta from '../../assets/images/insta.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => {
  return (
    <div className='footer-div'>
      <div className="footer-text-div">
        <div className="text-div-heading">We have what you’re looking for</div>
        <div className="text-div-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a</div>
        <Button className='frame2-btn'>Get Started Now</Button>
      </div>
      <div className="footer-last-div">
        <span className='copyright'>All Right Reserved @Copyright 2023</span>
        <div style={{width:'276px', height:'18px',display:'flex', justifyContent:'space-between'}}>
          <span className='terms'>Terms of Service</span>
          <span className='terms'>Privacy Policy</span>
          <span className='terms'>Product</span>
        </div>
        <div className='social'>
          <img  src={fb} alt=''/>
          <img  src={playstore} alt='' />
          <img  src={insta} alt=''/>
          <img  src={twitter} alt=''/>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
