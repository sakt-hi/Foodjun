import React from 'react'
import logo from '../assets/foodjun_white.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const sections = [
    {
      title: "Company",
      links: ["About", "Careers", "Team"]
    },
    {
      title: "Contact us",
      links: ["Help & Support", "Partner with us", "Ride with us"]
    },
    {
      title: "Legal",
      links: ["Terms & Conditions", "Cookie Policy", "Privacy Policy"]
    }
  ];
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>©{currentYear} - All rights reserved</p>
      </div>
      <div className="footer-links">
        {sections.map(section => (
          <div key={section.title} className={section.title.toLowerCase()}>
            <h6>{section.title}</h6>
            <ul>
              {section.links.map(link => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer