import React from 'react';
import './Footer.css';
import EmailIcon from '../../assets/email2.png';
import Instagram from '../../assets/instagram.png';
import Facebook from '../../assets/facebook.png';
import SectionLineBreak from '../SectionLineBreak/SectionLineBreak';

const Footer = () => {
  return (
    <div className="footer-container">
      <SectionLineBreak heading="Contact Us" />
      <div>
        <div className="footer-address-container">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontWeight: '700' }}>
              Cookson's Joinery & Renovations{' '}
            </p>
            <div className="information-container">
              <p>5 Hazel Grove</p>
              <p>West Yorkshire</p>
              <p>WF8 2WE</p>
            </div>
            <div className="information-container">
              <p>
                Call now: <a href="tel:07584416733">07584416733 </a>
              </p>
              <p>
                Or try: <a href="tel:01977709705">01977 709705 </a>
              </p>
            </div>
            <div className="information-container">
              <p>
                Have an enquiry?
                <a href="mailto:email@example.com">
                  Click here{' '}
                  <img
                    height={24}
                    width={24}
                    src={EmailIcon}
                    alt="email-icon"
                  />{' '}
                </a>
              </p>
            </div>
            <div className="information-container-socials">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/cooksonsjoinery/"
              >
                <img src={Instagram} alt="instagram" height={24} width={24} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/Cooksonsjoinery"
              >
                <img src={Facebook} alt="facebook" height={24} width={24} />
              </a>
            </div>
          </div>
          <div style={{ paddingBottom: '10px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d302513.2486709015!2d-1.6624816148250992!3d53.67576780121251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48796a44ccdc4c1d%3A0x93fd952f73eec07b!2sCookson&#39;s%20Joinery%20%26%20Renovations!5e0!3m2!1sen!2suk!4v1707140695211!5m2!1sen!2suk"
              width="350"
              height="350"
              loading="lazy"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
