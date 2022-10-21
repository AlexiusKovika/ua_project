/* eslint-disable max-len */

import React from 'react'

import Logotype from '../../../assets/images/header/logo.svg'
import Dnipro from '../../../assets/images/header/dnipro.svg'
import Dpgumpol from '../../../assets/images/header/dpgumpol.svg'
import osvitnyaT from '../../../assets/images/header/osvitnyaT.svg'
import Ednipro from '../../../assets/images/header/ednipro.svg'

import './styles.module.scss'

const Header = () => {

  return (
    <>
      <header className="header navbar container-fluid">
        
        <div className='header__container col-xl-7 col-lg-9 col-md-10 col-12 d-flex'>

          <div className='header__logo_block col-xl-2 col-lg-3 col-md-2 col-2'>
            <a href="/" className="navbar-brand row">
              <img className='header__logo ua' src={Logotype} alt="logo UA" />
            </a>
          </div>

          <div className='header__logo_block col-xl-2 col-lg-3 col-md-3 col-3'>
            <a href="https://dniprorada.gov.ua/" className="navbar-brand row">
              <img className='header__logo' src={Dnipro} alt="logo Dniprorada" />
            </a>
          </div>

          <div className='header__logo_block col-xl-3 col-lg-3 col-md-4 col-4'>
            <a href="https://humpolitic.dniprorada.gov.ua/" className="navbar-brand row">
              <img className='header__logo' src={Dpgumpol} alt="logo Gundep" />
            </a>
          </div>

          <div className='header__logo_block col-xl-2 col-lg-3 col-md-4 col-4'>
            <a href="https://otd.dniprorada.gov.ua/" className="navbar-brand row">
              <img className='header__logo' src={osvitnyaT} alt="logo osvitnyaT" />
            </a>
          </div>

          <div className='header__logo_block col-xl-2 col-lg-3 col-md-3 col-3'>
            <a href="https://ednipro.dp.ua/" className="navbar-brand row">
              <img className='header__logo' src={Ednipro} alt="logo eDnipro" />
            </a>
          </div>

        </div>
        

      </header>
    </>
  )
}

export default Header
