import React from 'react'
import Logo from '../../../assets/images/footer/logo.svg'

import './styles.module.scss'

const Footer = () => {

  return (
    <footer className="footer container-fluid">
      <div className="footer__block_logo col-lg-5 col-md-4 col-12">
        <img src={Logo} alt="logo eDnipro" className="footer__logo" />
        <p>Всі права захищені</p>
      </div>

      <div className="footer__links col-lg-7 col-md-8 col-12">
        <div className="footer__links_content">
          <p>Корисні посилання:</p>
          <div className="footer__link">
            <a href="https://edu.dniprorada.gov.ua/">Платформа НМТ</a>
            <a href="https://mybook.dniprorada.gov.ua/">MyBook</a>
            <a href="https://ednipro.dp.ua/">єДніпро</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
