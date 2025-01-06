import React from 'react'
import youtube_icon from '../assets/youtube_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import instagram_icon from '../assets/instagram_icon.png'
import facebook_icon from '../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer py-[30px] px-[4%] max-w-[1000px] my-0 mx-auto'>
      <div className='footer-icon flex gap-[20px] my-[40px] mx-0'>
        <img src={youtube_icon} alt="" className='w-[30px] cursor-pointer'/>
        <img src={twitter_icon} alt="" className='w-[30px] cursor-pointer'/>
        <img src={instagram_icon} alt="" className='w-[30px] cursor-pointer'/>
        <img src={facebook_icon} alt="" className='w-[30px] cursor-pointer'/>
      </div>
      <ul className='grid grid-cols-4 gap-[15px] mb-[30px] list-none'>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Terms of privacy</li>
        <li>legal Notices</li>
        <li>Cookies Preferences</li>
        <li>Coporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text text-md text-gray-100'>
        &copy; 1997-2021 Netflix, Inc. All rights reserved.
      </p>
    </div>
  )
}

export default Footer