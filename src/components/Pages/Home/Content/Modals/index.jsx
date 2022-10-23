/* eslint-disable react/prop-types */

import React from 'react'
import { createPortal } from 'react-dom'
import { useModal } from '../../../../Base/ModalContainer'

import Tests from './TestsUkr'

import styles from './styles.module.scss'
import classNames from 'classnames'

const Modal = () => {
  const { modalState, closeModal } = useModal();

  return createPortal(
    <div className={styles.modalBackground} id="modal">
      <form className={classNames(styles.modalContainer, styles['container-fluid'])}>
        <div className={styles.titleCloseBtn}>
          <button type="button" onClick={closeModal}>
            X
          </button>
        </div>
        {
          modalState === 'wheelfortune' &&  <Tests/>
        }

        {/* {
          modalState === 'signup' &&  <Tests/>
        } */}
       
      </form>
    </div>,
    document.getElementById('portal'),
  )
}

export default React.memo(Modal)
