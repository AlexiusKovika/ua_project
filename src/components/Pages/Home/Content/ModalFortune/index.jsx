/* eslint-disable react/prop-types */

import React from 'react'
import { createPortal } from 'react-dom'
// import Tests from '../TestsUkr'

import './styles.module.scss'

const ModalFortune = ({ hideModal }) => {

  return createPortal(
    <div className="modalBackground" id="modal">
      <form className="modalContainer  container-fluid">
        <div className="titleCloseBtn">
          <button type="button" onClick={hideModal}>
            X
          </button>
        </div>
        <h1>ZAEBALA</h1>
      </form>
    </div>,
    document.getElementById('modal'),
  )
}

export default React.memo(ModalFortune)
