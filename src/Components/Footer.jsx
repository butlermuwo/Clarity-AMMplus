import React from 'react'

const Footer = () => {

    const today = new Date()
  return (
    <div className='footer-container'>
        <h3 className=''>Clarity AMM+</h3>
        <p className='copyright'>Window Finance &copy; {today.getFullYear()}</p>
    </div>
  )
}

export default Footer