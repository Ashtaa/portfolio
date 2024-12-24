import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTelegram } from 'react-icons/fa';
import './footer.css'
function Footer({theme}) {
     
  const navigateToSocialMedia = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer'); 
  };
  return (
    <div>
      <footer>
      <div>
      <ul className='ul2'>
            <li>
                      <a href="#home"> Home</a>
                      </li>
                      <li>
                      <a href="#about" > About</a>
                      </li>
                      <li>
                      <a href="#skill"> Skills</a>
                        
                      </li>
                      <li>
                      <a href="#project" > Project</a>
                        
                      </li>
                      <li>
                         <a href="#contact"> Contact</a>
                          
                        
                      </li>
          </ul>
          <ul className={`ul ${theme}`} style={{}}>
            <li onClick={() => navigateToSocialMedia('https://www.facebook.com/ashnafi.sahele')} className="social-button">
                <FaFacebookF />
              </li>
            <li onClick={() => navigateToSocialMedia('https://twitter.com/p_a_b_l_o_15')} className="social-button"><FaTwitter /></li>
            <li onClick={() => navigateToSocialMedia('https://www.linkedin.com/in/Ashenafisahele')} className="social-button"><FaLinkedinIn /></li>
            <li onClick={() => navigateToSocialMedia('https://www.instagram.com/p_a_b_l._.o')} className="social-button"><FaInstagram /></li>
            <li onClick={() => navigateToSocialMedia('https://t.me/Ashenafisahele')} className="social-button"><FaTelegram /></li>
          </ul>
          
        </div>

        <p>&copy; 2024 Ashenafi Sahele. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer
