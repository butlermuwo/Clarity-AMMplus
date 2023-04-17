import React from 'react'

const Footer = () => {

    const today = new Date()
  return (
    <footer className='footer-container'>
        <div className="container hr-line">
        <hr />
        </div>
        <h3 className=''>Clarity AMM+</h3>
        <p className='copyright'>Window Finance &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer