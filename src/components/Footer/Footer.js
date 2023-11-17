import React from 'react'
import FooterImage from '../../assets/footer.png'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <img src={FooterImage} alt='footer'/>
    </div>
  )
}

export default Footer
