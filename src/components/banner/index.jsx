import React from 'react'
import './banner.css';
import logo from '../../assets/img/web_1440x396px.webp';

const banner = () => {
  return (
    <div>
      <img className='banner' src={logo} alt="banner" />
    </div>
  )
}

export default banner
