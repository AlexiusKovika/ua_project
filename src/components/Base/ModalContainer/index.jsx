/* eslint-disable react/prop-types */
import React, { createContext, useState, useCallback } from 'react'
import Modal from '../../Pages/Home/Content/Modal'

export const  ModalContext = createContext()

const ModalContainer = ({ children }) => {
  const [modalState, setModalState] = useState(false)
  const [modalShowState, setModalShowState] = useState(false)

  const closeModal = useCallback(() => setModalState(false), [])
  const openModal = useCallback(() => setModalState(true), [])

  const hideModal = useCallback(() => setModalState(false), [])
  const showModal = useCallback(() => setModalShowState(true), [])

  return (
    <ModalContext.Provider value={{ openModal, closeModal, showModal, hideModal }}>
      {children}
      {modalState && <Modal closeModal={closeModal} />}
      {modalShowState && <Modal hideModal={hideModal} />}
    </ModalContext.Provider>
  )
}

export default React.memo(ModalContainer)
