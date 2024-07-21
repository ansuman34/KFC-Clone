import React from 'react'
import './footer.css'
import FooterLogo from '../../assets/img/footer_Logo.svg'
import playstoreLogo from '../../assets/img/google_play.svg'
import appstoreLogo from '../../assets/img/apple.svg'

const footer = () => {
  return (
    <div className='footerWrapper'>
      <div className="row">
        <div className="col-md-4 col-sm-12 col-xs-12 footerLogo">
            <img src={FooterLogo} alt="" />
        </div>
        <div className="col-md-4">
            <ul className="footerList">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div className="col-md-4">
            <ul className="footerList">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
        <div className="col-md-4">
            <ul className="footerList">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
        </div>
        <div className="col-md-2">
            <ul className='footerList'>
                <li><a href="#"><img src={playstoreLogo} alt="" /></a></li>
            </ul>
        </div>
        <div className="col-md-2">
            <ul className='footerList'>
                <li><a href="#"><img src={appstoreLogo} alt="" /></a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default footer
