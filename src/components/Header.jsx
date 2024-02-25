import React from 'react'
import logo from '../assets/logo.jpg'
import IconSearch from '../assets/IconSearch'
import IconOffers from '../assets/IconOffers'
import IconHelp from '../assets/IconHelp'
import IconUser from '../assets/IconUser'
import { useData } from '../utils/DataContext'

const Header = () => {
  const { useMockData, toggleData } = useData();
  return (
    <header className='header'>
      <div className="logo-container">
        <img className='logo' src={logo} alt="ABHIRUCHI"/>
      </div>
      <div className="nav-items">
        <ul className='nav-list'>
          <li><IconSearch />Search</li>
          <li><IconOffers />Offers</li>
          <li><IconHelp /> Help</li>
          <li><span className='cart-num'>0</span>Cart</li>
          <li><IconUser /> Sakthivel G</li>
          <li>
            {/* Toggle button for switching between live and mock data */}
            <button className={`${useMockData ? 'mock-btn' :'live-btn' }`} onClick={toggleData}>
              {useMockData ? 'Mock' : 'Live'}
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header